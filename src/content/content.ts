import { MessageBus } from '../struct';
export class Timelapse {
  constructor() {
    chrome.runtime.onMessage.addListener(this.tlMessageListener.bind(this));
  }

  tlMessageListener(
    request: MessageBus<any>,
    sender: chrome.runtime.MessageSender,
    sendResponse: (res: MessageBus<any>) => {}
  ) {
    if (request.id === 'otl') {
      console.log(request.data);
    }
  }
}

// tslint:disable-next-line: no-unused-expression
new Timelapse();
