import { Component } from "@angular/core";
import { EventService } from "../shared/event.service";

@Component({
  template: `
    <div class="container">
      <img [src]="event?.imageUrl" [alt]="event?.name" class="event-image" />

      <div class="row">
        <div class="col-md-11">
          <h2>{{ event?.name }}</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div><strong>Date:</strong> {{ event?.date }}</div>
          <div><strong>Time:</strong> {{ event?.time }}</div>
          <div><strong>Price:</strong> \${{ event?.price }}</div>
        </div>
        <div class="col-md-6">
          <address>
            <strong>Address:</strong><br />
            {{ event?.location?.address }}<br />
            {{ event?.location?.city }}, {{ event?.location?.country }}
          </address>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        padding-left: 20px;
        padding-right: 20px;
      }

      .event-image {
        height: 100px;
      }
    `
  ]
})
export class EventDetailsComponent {
  event: any;
  constructor(private eventService: EventService) {}
  ngOnInit() {
    this.event = this.eventService.getEvent(1);
  }
}
