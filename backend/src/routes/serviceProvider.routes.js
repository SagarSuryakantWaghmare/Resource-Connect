import { Router } from "express";
import {
    getServiceProviderByCity,
    getServiceProviderDetails,
    getServiceProviderReviews,
    updateServiceProviderProfile,
    registerSP
} from "../controllers/serviceProvider.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/save-sp-details").post(verifyJWT, registerSP);

router.route("/get-by-city").get(verifyJWT, getServiceProviderByCity);
router.route("/:id").get(verifyJWT, getServiceProviderDetails);
router.route("/:id/reviews").get(verifyJWT, getServiceProviderReviews);
router.route("/update/:id").patch(verifyJWT, updateServiceProviderProfile);

export default router;