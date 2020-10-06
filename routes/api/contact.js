// const express = require('express');
// const axios = require('axios');
// const config = require('config');
// const router = express.Router();
// const auth = require('../../middleware/auth');
// const { check, validationResult } = require('express-validator');
// // bring in normalize to give us a proper url, regardless of what user entered
// const normalize = require('normalize-url');
// const checkObjectId = require('../../middleware/checkObjectId');

// const Profile = require('../../models/Profile');
// const User = require('../../models/User');

// // //@route GET api/contact
// // //@dec Test route
// // //@access public

// // router.get('/', (req,res)=>res.send('contact route'));

// // module.exports=router;


// // @route    PUT api/profile/experience
// // @desc     Add profile experience
// // @access   Private
// router.post(
//     '/contact',
//     [
//       auth,
//       [
//         check('fullname', 'fullname is required').not().isEmpty(),
//         check('phonenumber', 'phonenumber is required').not().isEmpty(),
//         check('email', 'email is required '),
//         check('title', 'title is required '),
//         check('description', 'description is required '),
//         check('date', 'date is required and needs to be from the past')
//           .not()
//           .isEmpty()
//           .custom((value, { req }) => (req.body.to ? value < req.body.to : true))
//       ]
//     ],
//     async (req, res) => {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//       }
  
//       const {
//         fullname,
//         phonenumber,
//         email,
//         title,
//         description,
//         date
//       } = req.body;
  
//       const newExp = {
//         fullname,
//         phonenumber,
//         email,
//         title,
//         description,
//         date
//       };
  
//       try {
//         const contact = await contact.findOne({ user: req.user.id });
  
//         contact.contact.unshift(newExp);
  
//         await contact.save();
  
//         res.json(contact);
//       } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server Error');
//       }
//     }
//   );
  
// module.exports = router;