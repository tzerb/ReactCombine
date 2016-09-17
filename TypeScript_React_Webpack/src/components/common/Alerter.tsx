
import * as alerterActions from '../../actions/alerterActions';

export class Alerter{
    public static success(msg : string) 
    {
        alerterActions.alertSuccess(msg);
        // alert('Worked: ' + msg);
    }

    public static error(msg : string) 
    {
        alerterActions.alertError(msg);
        //alert('Failed: ' + msg);
    }
}