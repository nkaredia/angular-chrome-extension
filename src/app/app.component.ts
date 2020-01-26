import { Component, OnInit } from '@angular/core';
import { MessageBus } from 'src/struct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {




  ngOnInit(): void {
    // chrome.storage.sync.get('color', ({ color }) => {
    //   this.color = color;
    // });
  }

  submit() {
    // if (!this.isAnyFieldEmpty()) {
    //   this.processOtl();
    // }
  }

  processOtl() {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, {
        id: 'otl',
        data: {}
      } as MessageBus<{ user: string; password: string }>);
    });
  }

  isEmpty(val: string) {
    return val && val.trim().length === 0;
  }

  // isAnyFieldEmpty() {
  //   return (
  //     this.isEmpty(this.otlId) ||
  //     this.isEmpty(this.otlPassword) ||
  //     this.isEmpty(this.hrisId) ||
  //     this.isEmpty(this.hp)
  //   );
  // }

  // public updateColor(color: string) {
  //   chrome.storage.sync.set({ color });
  // }

  // public colorize() {
  //   chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
  //     chrome.tabs.executeScript(
  //       tabs[0].id,
  //       { code: 'document.body.style.backgroundColor = "' + this.color + '";' }
  //     );
  //   });
  // }
}
