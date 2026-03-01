import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';

interface Company {
  id: string;
  companyName: string;
  hrName: string;
  hrPhone: string;
  status: string;
  isActive: boolean;
}


@Component({
  selector: 'app-company-list',
  imports: [CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    MatCardModule,
    MatTableModule,
    MatChipsModule
  ],
  templateUrl: './company-list.html',
  styleUrl: './company-list.scss',
})
export class CompanyList {
// ===== Mock Data =====
  companies = signal<Company[]>([
    {
      id: '1',
      companyName: 'Google',
      hrName: 'Riya',
      hrPhone: '9876543210',
      status: 'Scheduled',
      isActive: true
    },
    {
      id: '2',
      companyName: 'Amazon',
      hrName: 'Amit',
      hrPhone: '9123456780',
      status: 'Rejected',
      isActive: true
    }
  ]);

  showArchived = signal(false);

  displayedColumns: string[] = [
    'companyName',
    'hrName',
    'hrPhone',
    'status',
    'actions'
  ];

  // ===== Computed Filtered Data =====
  filteredCompanies = computed(() => {
    return this.companies().filter(c =>
      this.showArchived() ? true : c.isActive
    );
  });

  toggleArchived() {
    this.showArchived.update(v => !v);
  }

  archiveCompany(id: string) {
    this.companies.update(list =>
      list.map(c =>
        c.id === id ? { ...c, isActive: false } : c
      )
    );
  }
}
