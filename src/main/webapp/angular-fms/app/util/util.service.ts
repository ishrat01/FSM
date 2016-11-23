import {Floor} from "../floor/floor";
export class UtilService{
    /* static paths */
    public IMG_PATH = "/resources/img/";
    public CHAIR_FILE = "chair.png";
    public TABLE_PATTERN_FILE = "table_pattern.jpg";
    public FLOOR_PATTERN_FILE = "floor_pattern.jpg";
    public LOADING_FILE = "loading.gif";

    /* API paths */
    public GET_LAYOUT_URL = "/rest/datafetch";
    public GET_EMPLOYEE_URL = "";
    //var GET_DESK_URL = "/rest/datafetch";

    /*ENV Variables*/
    public GRIDS_PER_CHAIR= 1;
    public CHAIR_BORDER_RADIUS_RATIO = 0.08;
    public ARM_BORDER_RADIUS_RATIO = 0.05;
    public TABLE_BORDER_RADIUS_RATIO = 0.125;
    public MIN_BLOCK_SIZE_RATIO = 0.1;
    public CHAIR_PADDING = 0.1;
    public GRID_SIZE;

    public calculateGridSize(floor:Floor):void{
        let xGridSize = window.innerWidth/floor.getWidth();
        let yGridSize = window.innerWidth/floor.getHeight();
        this.GRID_SIZE = (xGridSize<yGridSize)?(xGridSize):(yGridSize);
    }


}