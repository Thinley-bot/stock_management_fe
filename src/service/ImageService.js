import axios from 'axios';

const IMAGE_API_BASE_URL = 'http://localhost:8080/image';

class ImageService {
  uploadImage(image) {
    const formData = new FormData();
    formData.append('image', image);
    return axios.post(`${IMAGE_API_BASE_URL}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }

  downloadImage(fileName) {
    return axios.get(`${IMAGE_API_BASE_URL}/${fileName}`, {
      responseType: 'arraybuffer'
    });
  }
}

export default new ImageService();
