/* created by Pedro da Silva Dergado
File name: business.controller.server.js
Student’s Name: Pedro da Silva Dergado
StudentID: 301239283
Date: 10/21/2022
*/
import businessModel from '../models/businessContact.js';

import { UserDisplayName } from '../utils/index.js';

export function DisplayBusinessList(req, res, next) {

    businessModel.find(function (err, businessCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Business List', page: 'business/list', businessData: businessCollection, displayName: UserDisplayName(req) });
    })
}

export function DisplayBusinessAddPage(req, res, next) {
    res.render('index', { title: 'Add Business_Contact', page: 'business/edit', business: {}, displayName: UserDisplayName(req) });
}

export function ProcessBusinessAddPage(req, res, next) {

    let newBusiness = businessModel({
        ContactName: req.body.name,
        EmailAddress: req.body.email,
        ContactNumber: req.body.contact

    });

    businessModel.create(newBusiness, (err, Business) => {
        if (err) {
            console.error(err);
            res.end(err);
        };

        res.redirect('/business-list')
    })
}

export function DisplayBusinessEditPage(req, res, next) {
    let id = req.params.id;

    businessModel.findById(id, (err, business) => {
        if (err) {
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Edit Business', page: 'business/edit', business: business, displayName: UserDisplayName(req) });
    });
}

export function ProcessBusinessEditPage(req, res, next) {

    let id = req.params.id;

    let newBusiness = businessModel({
        _id: req.body.id,
        ContactName: req.body.name,
        EmailAddress: req.body.email,
        ContactNumber: req.body.contact
    });

    businessModel.updateOne({ _id: id }, newBusiness, (err, Business) => {
        if (err) {
            console.error(err);
            res.end(err);
        };

        res.redirect('/business-list')
    })
}

export function ProcessBusinessDelete(req, res, next) {
    let id = req.params.id;

    businessModel.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }

        res.redirect('/business-list');
    })
}

