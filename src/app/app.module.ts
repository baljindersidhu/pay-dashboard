import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UpcomingPaymentsComponent } from './upcoming-payments/upcoming-payments.component';
import { PrimaryCardComponent } from './primary-card/primary-card.component';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';
import { MonthlySpendingInsightsComponent } from './monthly-spending-insights/monthly-spending-insights.component';
import { TransactionComponent } from './transaction/transaction.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TransactionDatePipe } from './pipes/transaction-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    UpcomingPaymentsComponent,
    PrimaryCardComponent,
    RecentTransactionsComponent,
    MonthlySpendingInsightsComponent,
    TransactionComponent,
    SearchBarComponent,
    TransactionDatePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
