import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ENDPOINTS } from '../../../core/config/endpoints';
import { Observable } from 'rxjs';

interface ResponseModel {
  data: any;
  status: number;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerService {

  constructor(private http: HttpClient) { }

  getWebRtcUrl(deviceId: number, cameraId: number): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(`${API_ENDPOINTS.BASE_URL}${API_ENDPOINTS.GETWEBRTCURL}?deviceId=${deviceId}&cameraId=${cameraId}`);
  }

}
