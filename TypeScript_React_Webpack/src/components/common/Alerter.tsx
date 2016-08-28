
export class Alerter{
    public static success(msg : string) 
    {
        alert('Worked: ' + msg);
    }

    public static error(msg : string) 
    {
        alert('Failed: ' + msg);
    }
}