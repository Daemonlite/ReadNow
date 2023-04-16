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

  const addSubscriber = async (req,res) => {
    const {userName,userProfile,user} = req.body

    if(!userName || !userProfile || !user){
        return res.status(400).json({message:"fill in required fields"})
    }

    let existingUser;
    try {
        existingUser = await User.findById(user)
    } catch (error) {
        console.log(error)
    }

    const sub = new Subscriber({
        userName,
        userProfile
        ,user
    })

    try {
        await sub.save()
        existingUser.subscribers.unshift(sub)
        existingUser.save()
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error });
    }
    return res.status(201).json(sub);
  }

  const unSubscribe = async (req,res) => {
    const id = req.params.id;

    let subscriber;
    try {
      subscriber = await Subscriber.findOne({ _id: id });
      if (!subscriber) {
        return res
          .status(404)
          .json({ message: "The specified subscriber was not found." });
      }
      await subscriber.deleteOne({ _id: id });
      await User.updateOne(
        { _id: subscriber.user },
        { $pull: { subscribers: { _id: subscriber._id } } }
      );
    } catch (err) {
      return res.status(500).json({
        message:
          "Unable to delete the  comment. An internal server error has occurred.",
      });
    }
    return res
      .status(200)
      .json({ message: "Successfully deleted the  comment." });
  }

module.exports = {
    getSubscriberById,
    getSubscribers,
    addSubscriber,
    unSubscribe
}