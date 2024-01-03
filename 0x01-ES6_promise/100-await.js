import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const uploadResult = await uploadPhoto();
  const createResult = await createUser();

  return {
    photo: uploadResult,
    user: createResult,
  };
}
