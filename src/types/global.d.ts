export {};

declare global{
    interface Window{
        initState:any;
        imgLocation:any;
        imgValue:any;
        imgAlpha:any;
        viewManager:any;
        ctx:any;
        group:any;
    }
    interface Screen{
        mozOrientation:any;
        msOrientation:any;
    }
}