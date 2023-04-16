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

    const sub = new subrary({
        userName,
        userProfile
        ,user
    })

    try {
        await sub.save()
        existingUser.Subscriber.unshift(sub)
        existingUser.save()
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error });
    }
    return res.status(201).json(sub);
  }