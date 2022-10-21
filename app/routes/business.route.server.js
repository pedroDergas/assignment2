/* created by Pedro da Silva Dergado
File name: business.route.server.js
Student’s Name: Pedro da Silva Dergado
StudentID: 301239283
Date: 10/21/2022
*/
import { Router } from "express";

import {
    DisplayBusinessList,
    DisplayBusinessAddPage,
    ProcessBusinessAddPage,
    ProcessBusinessEditPage,
    DisplayBusinessEditPage,
    ProcessBusinessDelete
} from "../controllers/business.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/business-list', DisplayBusinessList);
router.get('/business-add', AuthGuard, DisplayBusinessAddPage);
router.post('/business-add', AuthGuard, ProcessBusinessAddPage);
router.post('/business-edit/:id', AuthGuard, ProcessBusinessEditPage);
router.get('/business-edit/:id', AuthGuard, DisplayBusinessEditPage);
router.get('/business-delete/:id', AuthGuard, ProcessBusinessDelete);

export default router;