import express from 'express';
import {
  createResource,
  getAllResources,
  getResourceById,
  deleteResource
} from '../controllers/resourceController.mjs';

const router = express.Router();

router.post('/', createResource);
router.get('/', getAllResources);
router.get('/:id', getResourceById);
router.delete('/:id', deleteResource);

export default router;
