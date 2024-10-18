import { Router } from "express";
import { getServiceProviderByCity, getServiceProviderDetails, getServiceProviderReviews, updateServiceProviderProfile } from "../controllers/serviceProvider.controller.js";

const router = Router();

router.route("/get-by-city").get(getServiceProviderByCity);
router.route("/:id").get(getServiceProviderDetails);
router.route("/:id/reviews").get(getServiceProviderReviews);
router.route("/:id").patch(updateServiceProviderProfile); // Add update route

export default router;