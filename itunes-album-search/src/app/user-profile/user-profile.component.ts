import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent {
  // form: FormGroup;
  private apiUrl = "https://api.github.com/search/users?q=";
  //login id url
  userDetails = signal<any[]>([]);
  private http = inject(HttpClient);
  errmsg="";
  filterText = signal('');
  // afterSearch = signal<any[]>([]);

  search(userinput: string) {
    // check if input is valid
    if (!userinput || !/^[a-zA-Z0-9-]+$/.test(userinput)) {
      this.errmsg = "Invalid username format.";
      return;
    }
    this.errmsg = "";
    const url = `${this.apiUrl}${userinput}`;
    this.http.get<any>(url).subscribe({
      next: (data) => {
        console.log(data.items);//
        // this.afterSearch.set(data.items);
        this.userDetails.set(data.items);
      },
      error: (err) => console.error(err)
    });
  }

  // for filtering, auto update
  filteredUsers = computed(() => {
    const text = this.filterText().toLowerCase();
    if (!text) return this.userDetails(); //original data
    return this.userDetails().filter(user => (
      user.id.toString().includes(text) ||
      user.login.toLowerCase().includes(text) ||
      user.html_url.toLowerCase().includes(text)
    ));
  });

}
