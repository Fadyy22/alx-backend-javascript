import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(values => {
      return values.map(req => ({
        status: req.status,
        value: req.status === 'fulfilled' ? req.value : req.reason,
      }))
    })
}
