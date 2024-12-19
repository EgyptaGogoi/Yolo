import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class DetectViolationService {
    async detect_violation(imageUrl: string): Promise<any>{
        try {
            const response = await axios({
            method: 'POST',
            params: {
                url: "https://detect.roboflow.com/helmet-detection-koeoj/3",
                api_key: "ALi15MAfe2TMEwydwlS0",
                image: imageUrl
            },
            });

            
            return response.data
            // return this.cropRider.cropRiders(imageUrl,response.data.predictions); // Return the detection result
        } catch (error) {
            // Handle errors gracefully and throw NestJS-friendly exceptions
            return error;
        }   
    }
}
