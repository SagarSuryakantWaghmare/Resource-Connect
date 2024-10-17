import { Router } from "express";
import { getServiceProviderByCity, getServiceProviderDetails, getServiceProviderReviews } from "../controllers/serviceProvider.controller.js";

const router = Router();

router.route("/get-by-city").get(getServiceProviderByCity);
router.route("/:id").get(getServiceProviderDetails);
router.route("/:id/reviews").get(getServiceProviderReviews);

export default router;