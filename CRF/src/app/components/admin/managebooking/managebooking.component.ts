import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-managebooking',
  templateUrl: './managebooking.component.html',
  styleUrls: ['./managebooking.component.css']
})
export class ManagebookingComponent {
  @ViewChild('exampleModal') exampleModal!: ElementRef;

  constructor() {}

  openModal() {
    const modal: HTMLElement = this.exampleModal.nativeElement as HTMLElement;
    modal.classList.add('show'); // Show the modal
    modal.style.display = 'block'; // Ensure modal is displayed
    document.body.classList.add('modal-open'); // Prevent scrolling behind modal
  }

  closeModal() {
    const modal: HTMLElement = this.exampleModal.nativeElement as HTMLElement;
    modal.classList.remove('show'); // Hide the modal
    modal.style.display = 'none'; // Hide the modal
    document.body.classList.remove('modal-open'); // Allow scrolling behind modal
  }

}
