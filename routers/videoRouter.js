import express from "express";
import routes from "../routes";
import { upload, videoDetail, editVideo, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, upload);
//videoDetail은 함수이기 때문에 ()을 붙여준다.
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo , deleteVideo);

export default videoRouter; 