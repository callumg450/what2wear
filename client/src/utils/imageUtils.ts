// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import { storage } from '../firebase';

// export const uploadImage = async (file: File): Promise<string> => {
//   const storageRef = ref(storage, `outfits/${Date.now()}-${file.name}`);
//   await uploadBytes(storageRef, file);
//   const downloadURL = await getDownloadURL(storageRef);
//   return downloadURL;
// };

// type ImagePreviewResponse = {
//   success: boolean;
//   imageUrl?: string;
//   error?: string;
// };

// export const getImagePreviewFromUrl = async (url: string): Promise<ImagePreviewResponse> => {
//   try {
//     // This would ideally be a backend API endpoint that fetches OG tags
//     const response = await fetch(`/api/preview-image?url=${encodeURIComponent(url)}`);
//     const data = await response.json();
    
//     if (!data.imageUrl) {
//       return {
//         success: false,
//         error: 'No preview image found'
//       };
//     }

//     return {
//       success: true,
//       imageUrl: data.imageUrl
//     };
//   } catch (error) {
//     return {
//       success: false,
//       error: 'Failed to fetch preview'
//     };
//   }
// };
