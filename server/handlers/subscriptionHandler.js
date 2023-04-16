const Subscriber = require('../models/subscriptionModel')
const User = require('../models/userModel')

const getSubscribers = async (req,res) => {
    try {
        const subs = await  Subscriber.find();
        res.json(subs);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to retrieve Subscribers" });
      }
}

const getSubscriberById = async (req, res) => {
    try {
      const subs = await Subscriber.findById(req.params.id);
      if (!subs) {
        return res.status(404).json({ message: "Subscriber not found" });
      }
      res.json(subs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to retrieve Subscriber" });
    }
  };
