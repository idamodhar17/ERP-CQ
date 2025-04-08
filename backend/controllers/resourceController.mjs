import Resource from "../models/resourceModel.mjs";

export const createResource = async (req, res) => {
    try {
      const { class: classId, subject, files, description } = req.body;
  
      if (req.user.role !== 'admin' && req.user.role !== 'teacher') {
        return res.status(403).json({ message: 'Only admin or teacher can upload resources' });
      }
  
      const newResource = new Resource({
        class: classId,
        subject,
        teacher: req.user._id,
        files,
        description
      });
  
      const saved = await newResource.save();
      res.status(201).json(saved);
    } catch (error) {
      res.status(500).json({ message: 'Error creating resource', error });
    }
  };
  
  export const getAllResources = async (req, res) => {
    try {
      let resources;
  
      if (req.user.role === 'admin') {
        resources = await Resource.find().populate('class subject teacher');
      } else if (req.user.role === 'teacher') {
        resources = await Resource.find({ teacher: req.user._id }).populate('class subject teacher');
      } else if (req.user.role === 'student') {
        resources = await Resource.find({ class: req.user.class }).populate('class subject teacher');
      } else {
        return res.status(403).json({ message: 'Not authorized' });
      }
  
      res.status(200).json(resources);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching resources', error });
    }
  };
  
  export const getResourceById = async (req, res) => {
    try {
      const resource = await Resource.findById(req.params.id).populate('class subject teacher');
  
      if (!resource) return res.status(404).json({ message: 'Resource not found' });
  
      if (req.user.role === 'student' && resource.class.toString() !== req.user.class.toString()) {
        return res.status(403).json({ message: 'Not authorized to access this resource' });
      }
  
      if (req.user.role === 'teacher' && resource.teacher.toString() !== req.user._id.toString()) {
        return res.status(403).json({ message: 'Not authorized to view this resource' });
      }
  
      res.status(200).json(resource);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching resource', error });
    }
  };

  export const deleteResource = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Resource.findByIdAndDelete(id);
  
      if (!deleted) {
        return res.status(404).json({ message: 'Resource not found' });
      }
  
      res.status(200).json({ message: 'Resource deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting resource', error });
    }
  };