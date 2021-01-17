import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VendorDetailsService } from '../service/vendor-details.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

	constructor(private vendorDetailsService: VendorDetailsService) { }

	activeAccounts = 3;
	simplCardData = new BehaviorSubject<any>(null);
	payLaterCardData = new BehaviorSubject<any>(null);
	billTypes = new BehaviorSubject<any>(null);
	vendors = new BehaviorSubject<any>(null);
	recentTransactions = new BehaviorSubject<any>(null);

	ngOnInit() {
		this.getPaymentDetails();
		this.getBillTypes();
		this.getVendors();
		this.getTransactions();
	}

	getPaymentDetails() {
		this.simplCardData.next({
			minAmountDue: 1500,
			dueDate: '15 Aug',
			totalExpenditure: 1800,
			isBillOverdue: true,
		});

		this.payLaterCardData.next({
			amountDue: 1150,
			message: 'Clear last month’s dues with ICICI bank on/before 15th to avoid late payment fees. Manage account',
		})
	}

	getBillTypes() {
		this.billTypes.next(['prepaid', 'electricity', 'broadband', 'dth', 'gas', 'landline', 'water', 'datacard'])
	}

	getVendors() {
		this.vendors.next([
			{ name: 'BigBasket', id: 1, icon: 'https://s3-alpha-sig.figma.com/img/9e86/f065/4fad2b126ba415a16b7308f2179544b9?Expires=1611532800&Signature=Ozk0oBKVlWxx1k0zTxujGkJgWKe2d~rzg4B~D~OKRIrjSi9M9JcP6PVJ6mWuz08O9fZ-Duu1LgpwWaGK8T~O0ZyKzGLIvLt17uoxcMepXUAdvPfEaMFjzUVla3pmASkmcAWEJ9Ldpb0D~m5p7Ix0PNoLI5KhI4rfYfIXG-KvUSuWR5abkTCVRhlsoAwgbydva2320KrCOjQiEsdZ4lt1nGQCx3p4Ub8GTe49FBb0UhfQVUIAVT9W~Qru77USBHCCpolQg80C9Spex3z0DE4xlajT1MsjzzWqUIJsQ~AdmMK08WpcWUlA4EisuUBnH0oHG7ar6svD0y0LjuodiiaiPA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
			{ name: 'Dunzo', id: 2, icon: 'https://s3-alpha-sig.figma.com/img/419b/7896/f786c32a46bfca314029278e01b44677?Expires=1611532800&Signature=OYEdi8VSmF0FliImEBAXo8xGhsrvcK75Fd00X6X9eOhyu4srmEWGjStbt9tiMIfF--OvRixHCChwf5wEK80orkD0BozchzuGeYJvdPNxmbPdVBJpNaHBSPREoEd6O5kE-XSbad-e9nOvS3i9pGkRYB-csy63KJWrwCIkP9Xs0c1mi4JFmitatXy29~vnM-EKrbB-BHFs5GkNKFRUATRKTzsk6A-lUtqLw~XqCi1lWSItXWzAynpetR6WRxv5pm4qLzt7ZfrHw0pnmeQFDHwO6edBdTi-MwKCbowZPPv-5~24Qsb1JVAQFnNh7Ge5vMJxBh~dCXZXnjwFKCSRBBsf7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
			{ name: 'Grofers', id: 3, icon: 'https://www.figma.com/file/QYOc5uJ1ulgv1N65OGIuY4/image/2d3feac5db46ab3f4a30fc036ed0ea6f2d7c1fa7' },
			{ name: 'Zomato', id: 4, icon: 'https://s3-alpha-sig.figma.com/img/6b95/c6f1/da1e3081c221bb583059d94e95a53633?Expires=1611532800&Signature=S39lSMX7ljHRgoneVFITSMbXjuSeMW8kQmMLixhVL1JP4mPyn~aACPFA1EEQIw48zzzwNbjKzYMMR9TqLC2447ivqyfPfrI-RymQ6rlgPiVrd9ba3PAXN2JaAk8NAxXi2pIPfM9PGryTtjR4lTfcw4MgWlg9tZHDIecmUwyRs5~KLfbAJgE9sIPCJ0nra2KcUUfxafMQ5b04QMswRP4g8WD49zJtWOH0cLyllEUi0uXo5-9MH9Oyz3VqnK5z6~oDOUC2-GreMWpMtetB2AKo3pGopbpQJFyGJXOxPX5m6XS~1bDY28jKT2PsAmNFe4aB0eTXIKHBEbhWmJoMDB~1fw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' },
			{ name: 'Bescom', id: 5, icon: 'https://s3-alpha-sig.figma.com/img/1f7d/5f81/28e07a488e883677c706ad484ac5218a?Expires=1611532800&Signature=Q5So2sfd5utKorbAgVx0NMJtAO-~kKPrU8~Y~OX8uAa2BuPmIE7WHOS0PZMFLsDGV5mEd2Ws9wGNF8p6GWuq1~kmLrHXJj1-~diF~tIpmGT8Wd44RTZA5vMWNFY7HnACynXX5bIud1uzOn8W8Vgyt-NvuLOMzK6152qCTeNvXag49Owx6dEnZw16-ZDjnxPvtF66u1G6Tmmz4ciO2mVWvvpLTZ8dehMaQnDY5r64SZwni4uUHDQYLF~x59Bfv0f5WMHmSk3RpigGT38LMb7ekJ4rYfX8Nlfb8mqHLa1iiYqHu--O9FnufXFJOQovw7J6axw8mSGc6DDoHs-NUj270w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' }
		]);
		this.vendorDetailsService.vendors.next(this.vendors.value);
	}

	getTransactions() {
		this.recentTransactions.next([
			{ vendorName: 'Zomato', id: 4, transactionValue: 120, time: '06:12 PM', date: 'May 24', method: 'Simpl Pay Later', message: '' },
			{ vendorName: 'Bescom', id: 5, transactionValue: 370, time: '11:18 PM', date: 'May 20', method: '', message: 'Home - 0090887667' },
			{ vendorName: 'Big Basket', id: 1, transactionValue: 110, time: '07:06 AM', date: 'May 15', method: '', message: '₹100 Cashback! Will be  credited after repayment' },
		])
	}
}
