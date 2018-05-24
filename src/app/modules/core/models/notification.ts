export class Notification {
    type: NotificationType;
    message: string;
    state: boolean;

    constructor() {
        this.type = null;
        this.message = '';
        this.state = false;
    }
}

export enum NotificationType {
    SUCCESS = 'success',
    ERROR = 'error',
    INFO = 'infor',
    WARNING = 'error'
}
