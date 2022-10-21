/* created by Pedro da Silva Dergado
File name: index.route.server.js
Student’s Name: Pedro da Silva Dergado
StudentID: 301239283
Date: 10/21/2022
*/
import { Router } from "express";
import {
    displayAboutPage,
    displayContactPage,
    displayHomePage,
    displayProjectsPage,
    displayServicesPage
} from "../controllers/index.controller.server.js";

const router = Router();

router.get('/', displayHomePage);
router.get('/home', displayHomePage);
router.get('/about', displayAboutPage);
router.get('/projects', displayProjectsPage);
router.get('/services', displayServicesPage);
router.get('/contact', displayContactPage);

export default router;
