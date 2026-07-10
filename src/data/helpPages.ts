export type FAQ = [question: string, answer: string];

export interface HelpPage {
  slug: string;
  title: string;
  h1: string;
  description: string;
  category: 'Deposit' | 'Withdrawal' | 'Account' | 'Safety' | 'Complaint';
  appLabel?: string;
  updated: string;
  quickAnswer: string;
  context: string;
  immediateSteps: string[];
  evidence: string[];
  escalation: string[];
  avoid: string[];
  faq: FAQ[];
}

export const helpPages: HelpPage[] = [
  {
    slug: 'jaiho-withdrawal-pending',
    title: 'Jaiho Withdrawal Pending: Independent Help Checklist',
    h1: 'Jaiho Withdrawal Pending — What to Check First',
    description: 'Independent checklist for users searching Jaiho withdrawal pending, success but not received, support delay or repeated deposit demands.',
    category: 'Withdrawal', appLabel: 'Jaiho-named gaming app', updated: '2026-07-10',
    quickAnswer: 'Do not deposit more money to unlock an existing withdrawal. Save the withdrawal ID, app balance, support messages and bank statement, then use only support details shown inside the exact app or its verified official domain.',
    context: 'Several similarly named Jaiho apps and pages appear online. GameHelp India does not operate them, cannot access accounts and cannot confirm that two similarly named apps have the same owner. First identify the exact package name, website and transaction record before following any support advice.',
    immediateSteps: ['Screenshot the withdrawal amount, request time and status.', 'Check whether the app says pending, successful, rejected or turnover incomplete.', 'Verify the destination UPI ID or bank account without sharing it publicly.', 'Ask in-app support for a written status and UTR/RRN if payment is marked successful.', 'Stop adding money while an earlier transaction remains unresolved.'],
    evidence: ['Withdrawal/order ID and exact timestamp', 'User ID with sensitive digits masked', 'Screenshots of wallet and withdrawal history', 'Bank statement covering the expected credit date', 'Support-ticket number and complete conversation'],
    escalation: ['Send one written request through verified in-app support.', 'If marked successful, request the bank transfer UTR/RRN.', 'Contact your bank with the UTR if one is provided.', 'For suspected financial fraud, call 1930 immediately and file at cybercrime.gov.in.', 'Keep an exported copy of every complaint and acknowledgement.'],
    avoid: ['Paying a VIP, tax, security or unfreeze fee to release money', 'Sharing OTP, UPI PIN, screen-share access or full card details', 'Trusting Telegram accounts that contact you first', 'Installing a second APK offered as a withdrawal fix'],
    faq: [['Can GameHelp India release my withdrawal?', 'No. This is an independent information site and has no access to any gaming account or wallet.'], ['Should I deposit again to complete VIP level?', 'Do not send more money solely because someone promises it will unlock an existing withdrawal. Treat that request as a serious risk signal.'], ['What if the app says success but my bank has no credit?', 'Request a bank transfer UTR or UPI reference from verified support, then ask your bank to trace that reference.']]
  },
  {
    slug: 'jaiho-deposit-not-credited',
    title: 'Jaiho Deposit Not Credited: UPI and UTR Help',
    h1: 'Jaiho Deposit Not Credited — Evidence and Escalation Steps',
    description: 'What to save and where to escalate when a payment to a Jaiho-named app is debited but the in-app balance is not credited.',
    category: 'Deposit', appLabel: 'Jaiho-named gaming app', updated: '2026-07-10',
    quickAnswer: 'Check the final bank or UPI status first. If money is debited, save the 12-digit UTR/reference and do not repeat the payment. Contact only verified in-app support and your bank.',
    context: 'A bank debit and an app-wallet credit are separate records. The most useful evidence is the final bank status, recipient/merchant name, UTR, amount and timestamp—not a cropped screenshot that hides the transaction reference.',
    immediateSteps: ['Open the transaction in your bank or UPI app and confirm pending, failed or successful.', 'Copy the UTR/reference and merchant name exactly.', 'Compare amount and time with the app deposit order.', 'Submit one complete support ticket rather than repeated partial messages.', 'Wait only for the timeline stated in written support; do not make a test deposit.'],
    evidence: ['UPI/bank reference or UTR', 'Merchant/beneficiary name displayed by the bank', 'Deposit order ID inside the app', 'Amount and timestamp', 'Uncropped status screenshot with sensitive data masked'],
    escalation: ['Raise a dispute in the UPI or banking app.', 'Contact the bank and ask whether the beneficiary received the payment.', 'Send the bank response to verified in-app support.', 'If the recipient is unknown or support demands more money, report suspected fraud to 1930.', 'Record the cybercrime acknowledgement number.'],
    avoid: ['Sending the same amount again', 'Posting full bank statements in public groups', 'Sharing OTP or UPI PIN with “refund agents”', 'Using support numbers copied from comments or forwarded messages'],
    faq: [['Is a successful UPI status proof the gaming wallet received it?', 'It proves the bank-side transfer status, not the app ledger credit. Both records must be reconciled using the UTR and deposit order.'], ['Can a Telegram admin fix the deposit?', 'Only the verified operator and payment providers can reconcile their ledgers. An unrelated admin cannot safely do this.'], ['When should I call 1930?', 'Call immediately when you suspect deception, an unknown merchant, account takeover or pressure to send additional money.']]
  },
  {
    slug: 'jaiho-account-blocked',
    title: 'Jaiho Account Blocked or Login Failed: Safe Recovery Guide',
    h1: 'Jaiho Account Blocked — Safe Login Recovery Checks',
    description: 'Independent safety guide for Jaiho account blocked, OTP failure, device change and login recovery searches.',
    category: 'Account', appLabel: 'Jaiho-named gaming app', updated: '2026-07-10',
    quickAnswer: 'Use the recovery option inside the same app or verified website where the account was created. Never give an OTP to a person claiming they can unblock the account.',
    context: 'Similar app names and unofficial APK pages make account recovery especially risky. Confirm the package name and domain before entering a mobile number or OTP.',
    immediateSteps: ['Confirm you are using the same app/package originally installed.', 'Check whether the app has an official update notice.', 'Use password reset only inside the verified app or domain.', 'Take a screenshot of the exact error code.', 'Ask verified support for the reason and appeal process in writing.'],
    evidence: ['Exact error message and timestamp', 'Masked user ID and registered mobile suffix', 'Original registration or installation source', 'Support ticket number', 'Recent account-change notifications'],
    escalation: ['Secure the registered email and mobile account first.', 'Ask the operator for an account-access log if compromise is suspected.', 'Inform the bank if payment credentials may be exposed.', 'Report unauthorised transactions to 1930 and cybercrime.gov.in.', 'Do not create multiple replacement accounts while a dispute is open.'],
    avoid: ['Sharing OTP with support agents', 'Installing remote-access apps', 'Paying an account-unfreeze fee', 'Using unofficial APK update links'],
    faq: [['Can support ask for my OTP?', 'No legitimate support process should require you to disclose a live OTP or UPI PIN to another person.'], ['Should I reinstall the APK from a Telegram link?', 'No. Use only a verified official source after checking the package and developer identity.'], ['What if money remains in the blocked account?', 'Request a written balance and withdrawal process from verified support and preserve every response for escalation.']]
  },
  {
    slug: '66-lottery-withdrawal-pending',
    title: '66 Lottery Withdrawal Pending: Independent Safety Steps',
    h1: '66 Lottery Withdrawal Pending — What Users Can Document',
    description: 'Independent consumer-safety checklist for 66 Lottery withdrawal pending, turnover messages and payment-not-received searches.',
    category: 'Withdrawal', appLabel: '66 Lottery-named platform', updated: '2026-07-10',
    quickAnswer: 'Do not continue playing or depositing merely to remove a withdrawal restriction. Save the displayed turnover rule, withdrawal ID and support response, then evaluate whether the rule was disclosed before payment.',
    context: 'GameHelp India has not verified the ownership, licensing or payment claims of platforms using the 66 Lottery name. Similar names and changing domains are a reason to document the exact URL and app package before contacting anyone.',
    immediateSteps: ['Capture the full withdrawal and turnover screen.', 'Save terms that were visible when the bonus or deposit was accepted.', 'Check whether the app identifies a legal entity and grievance contact.', 'Request a written explanation instead of relying on voice calls.', 'Do not send a new “verification” or “unlock” payment.'],
    evidence: ['Exact domain and APK package name', 'Withdrawal ID and wallet history', 'Original bonus/wagering terms', 'Deposit UTRs connected to the balance', 'Support usernames, timestamps and messages'],
    escalation: ['Use only the grievance route published by the verified operator.', 'Ask for a final written decision and transaction reference.', 'Notify the bank of any disputed or deceptive transfer.', 'Call 1930 immediately for suspected financial fraud.', 'Submit the full evidence set at cybercrime.gov.in.'],
    avoid: ['Completing an unexpected turnover by losing more money', 'Paying taxes or fees to personal UPI IDs', 'Following “guaranteed withdrawal” videos', 'Moving to another app recommended by the same support agent'],
    faq: [['Does completing turnover guarantee withdrawal?', 'No independent site can guarantee that. Review whether the condition was disclosed and do not risk more money simply to chase an existing balance.'], ['Is GameHelp India official 66 Lottery support?', 'No. We are independent and do not operate or represent the platform.'], ['What evidence matters most?', 'The exact domain/package, original terms, withdrawal ID, deposit UTRs and complete support conversation.']]
  },
  {
    slug: '66-lottery-deposit-not-credited',
    title: '66 Lottery Deposit Pending: Bank and UPI Evidence Guide',
    h1: '66 Lottery Deposit Not Credited — First Response Checklist',
    description: 'Steps for documenting a 66 Lottery-named deposit that was debited by UPI or bank but not shown in the game wallet.',
    category: 'Deposit', appLabel: '66 Lottery-named platform', updated: '2026-07-10',
    quickAnswer: 'Do not repeat the deposit. Verify the recipient name and UTR in your bank app, save the game deposit order, and raise a bank dispute if the beneficiary or payment purpose looks unfamiliar.',
    context: 'A payment page may route funds to a changing merchant or personal account. Record the beneficiary exactly as your bank displays it. Do not assume a familiar game logo proves who received the money.',
    immediateSteps: ['Confirm the bank-side final status.', 'Copy the UTR, merchant UPI ID and beneficiary name.', 'Save the app deposit order before it disappears.', 'Compare the exact amount and timestamp.', 'Stop payments until the mismatch is explained.'],
    evidence: ['Bank/UPI status and UTR', 'Beneficiary and merchant details', 'Game account ID with sensitive parts masked', 'Deposit-order screenshot', 'Support response and promised timeline'],
    escalation: ['Raise a UPI dispute through your payment app.', 'Ask your bank for beneficiary confirmation.', 'Contact only the verified platform grievance channel.', 'Report unknown or deceptive recipients through 1930.', 'Keep the complaint acknowledgement and bank ticket.'],
    avoid: ['A second deposit to “activate” the first', 'Sending screenshots containing full account numbers', 'Refund links sent by unknown Telegram users', 'Entering UPI PIN to receive a refund'],
    faq: [['Do I enter my UPI PIN to receive a refund?', 'No. A UPI PIN authorises an outgoing payment; it is not required to receive money.'], ['What if support says payment provider did not receive it?', 'Ask your bank to trace the UTR and provide a written status, then include that response in the grievance.'], ['Can I rely on a screenshot from support?', 'Ask for a traceable ticket, ledger reference or bank transaction number rather than an unverified image.']]
  },
  {
    slug: '66-lottery-customer-care-check',
    title: '66 Lottery Customer Care Check: Avoid Fake Support Accounts',
    h1: '66 Lottery Customer Care — How to Verify a Support Contact',
    description: 'Independent guide to checking 66 Lottery customer-care numbers, Telegram accounts and refund messages without sharing OTP or UPI PIN.',
    category: 'Safety', appLabel: '66 Lottery-named platform', updated: '2026-07-10',
    quickAnswer: 'Do not trust a phone number or Telegram username merely because it uses a logo. A valid support contact should be published inside the exact app and on a verifiable operator domain with matching legal identity.',
    context: 'Search results, video descriptions and messaging groups can contain unofficial support contacts. GameHelp India does not publish replacement customer-care numbers because ownership can change and impersonation is common.',
    immediateSteps: ['Compare the contact shown inside the app and website.', 'Check whether the domain names the legal operator.', 'Verify that support does not ask for OTP, PIN or remote access.', 'Ask for a ticket number and written response.', 'End contact if the agent pushes another deposit.'],
    evidence: ['Support URL and username', 'First message and who initiated it', 'Ticket/reference number', 'Payment request details', 'Any APK or remote-access link sent'],
    escalation: ['Report impersonation inside the messaging platform.', 'Inform the verified operator about the fake account.', 'Contact your bank if credentials or payments were shared.', 'Call 1930 for immediate financial fraud reporting.', 'Change affected passwords and revoke remote access.'],
    avoid: ['Publishing your user ID with phone number', 'Allowing screen sharing during banking', 'Paying a refundable security amount', 'Trusting “recovery experts” promising guaranteed release'],
    faq: [['Can a logo prove a Telegram account is official?', 'No. Logos, names and screenshots are easy to copy. Verify through the exact app and legal-domain records.'], ['Can support ask me to install AnyDesk or another remote tool?', 'Treat that as a serious risk. Do not give remote control of a device used for banking or OTPs.'], ['Why does this page not list a customer-care number?', 'Publishing an unverified number can send users to impersonators. We provide a verification process instead.']]
  },
  {
    slug: 'online-game-withdrawal-pending',
    title: 'Online Game Withdrawal Pending: India Help Checklist',
    h1: 'Online Game Withdrawal Pending — Step-by-Step Help',
    description: 'A neutral India-focused checklist for online game withdrawals that are pending, rejected, successful but not received or blocked by new payment demands.',
    category: 'Withdrawal', updated: '2026-07-10',
    quickAnswer: 'Preserve the withdrawal record and stop further deposits. Ask verified support for a written status and bank reference; escalate suspected financial fraud immediately through 1930 and cybercrime.gov.in.',
    context: 'Withdrawal delays can involve incomplete verification, bank rejection, undisclosed turnover rules or deceptive payment demands. The correct response depends on evidence, not promises from public groups.',
    immediateSteps: ['Identify the exact status shown in the app.', 'Save request ID, amount and timestamp.', 'Review only terms accepted before the transaction.', 'Ask for the transfer UTR/RRN if marked paid.', 'Do not chase the balance with another deposit.'],
    evidence: ['Withdrawal history', 'Wallet ledger', 'Accepted terms', 'Deposit and withdrawal references', 'Verified support correspondence'],
    escalation: ['Operator grievance channel', 'Bank or UPI dispute with reference', 'National Cybercrime helpline 1930', 'Written complaint at cybercrime.gov.in', 'Local police for urgent or continuing loss'],
    avoid: ['Unlock fees', 'VIP upgrade payments', 'Remote-access support', 'Publicly sharing KYC documents'],
    faq: [['How long should I wait?', 'Use only the timeline published in the accepted terms or written support. If the timeline passes, escalate with evidence.'], ['Can bonus money be withdrawable?', 'Bonus and wagering rules vary; save the exact terms shown before acceptance and do not rely on later verbal claims.'], ['Should I use a recovery agent?', 'Avoid anyone requesting advance payment, OTPs, banking access or another deposit.']]
  },
  {
    slug: 'online-game-deposit-pending',
    title: 'Online Game Deposit Pending: UPI Money Debited Help',
    h1: 'Game Deposit Pending but Money Debited — What to Do',
    description: 'Independent help when an online game deposit is debited from UPI or bank but not credited to the in-app wallet.',
    category: 'Deposit', updated: '2026-07-10',
    quickAnswer: 'Do not repeat the transaction. Record the UTR, beneficiary, deposit order and final bank status, then raise disputes through the bank and verified operator channel.',
    context: 'The bank transfer record and game-wallet ledger must be matched. A screenshot showing only “successful” is less useful than the complete reference, recipient and timestamp.',
    immediateSteps: ['Check whether the transaction is pending, failed or successful.', 'Copy the UTR/reference.', 'Record the beneficiary and merchant UPI ID.', 'Save the game deposit order.', 'Open one complete grievance with both records.'],
    evidence: ['UTR/reference', 'Recipient details', 'Amount and time', 'Deposit order', 'Bank and operator ticket numbers'],
    escalation: ['UPI app dispute', 'Bank customer care', 'Verified operator grievance', '1930 for suspected fraud', 'Cybercrime portal evidence upload'],
    avoid: ['Repeat payment', 'Refund QR codes', 'Sharing UPI PIN', 'Unverified WhatsApp/Telegram support'],
    faq: [['Will a failed UPI payment reverse automatically?', 'Some failed transactions reverse under payment-system timelines, but confirm the bank status and raise a dispute if the stated timeline passes.'], ['What is a UTR?', 'It is a transaction reference used by banks and payment providers to trace a transfer.'], ['Why save the beneficiary name?', 'It helps identify where the bank says money was sent and whether it matches the expected merchant.']]
  },
  {
    slug: 'game-withdrawal-success-but-not-received',
    title: 'Game Withdrawal Successful but Not Received in Bank',
    h1: 'Withdrawal Shows Successful but Bank Has No Credit',
    description: 'How to trace an online game withdrawal marked successful when the expected bank or UPI credit has not arrived.',
    category: 'Withdrawal', updated: '2026-07-10',
    quickAnswer: 'Ask verified support for the actual UTR/RRN and payout timestamp. A dashboard success label alone is not proof that a bank transfer was completed.',
    context: 'Bank tracing requires a real payment reference. Screenshots generated inside an app cannot replace a UTR, RRN or bank confirmation.',
    immediateSteps: ['Save the success screen and withdrawal ID.', 'Request UTR/RRN and payout bank name.', 'Check the complete receiving-account statement.', 'Ask the receiving bank to trace the reference.', 'Document any mismatch in a written complaint.'],
    evidence: ['Withdrawal success record', 'UTR/RRN', 'Receiving bank statement', 'Payout timestamp', 'Support ticket'],
    escalation: ['Verified operator grievance', 'Receiving bank trace request', 'Payment-provider grievance', '1930 if reference is fake or absent amid deception', 'Cybercrime complaint with full chronology'],
    avoid: ['Accepting a fabricated screenshot as bank proof', 'Paying a trace fee', 'Sharing account login credentials', 'Deleting support chats'],
    faq: [['What if support refuses to provide a UTR?', 'Record the refusal and include it in your bank, grievance or cybercrime complaint.'], ['Can the receiving bank trace without UTR?', 'A bank may search by amount and date, but a valid transfer reference makes tracing substantially clearer.'], ['Does “processed” mean paid?', 'Not necessarily. Ask whether the transfer was actually initiated and request its bank reference.']]
  },
  {
    slug: 'gaming-app-utr-not-found',
    title: 'Gaming App UTR Not Found or Invalid: Trace Checklist',
    h1: 'UTR Not Found — How to Verify a Gaming Payment Reference',
    description: 'Checklist for invalid, missing or untraceable UTR and payment references connected to online gaming deposits or withdrawals.',
    category: 'Deposit', updated: '2026-07-10',
    quickAnswer: 'Copy the reference directly from the bank or UPI transaction details. Do not rely on a reference typed in chat; ask the bank that supposedly issued it to confirm.',
    context: 'Different payment rails use different references. A merchant order ID, game deposit ID and bank UTR are not interchangeable.',
    immediateSteps: ['Identify whether the reference is from bank, UPI, wallet or game ledger.', 'Copy it without spaces or screenshots.', 'Match amount, date and beneficiary.', 'Ask the issuing bank/payment provider to confirm.', 'Keep the game order ID separately.'],
    evidence: ['Original payment-app transaction page', 'UTR/RRN', 'Merchant order ID', 'Beneficiary', 'Bank ticket number'],
    escalation: ['Payment-app dispute', 'Issuing bank trace', 'Receiving bank confirmation where possible', 'Operator grievance with both IDs', '1930 if a fake reference is used to delay or demand money'],
    avoid: ['Editing transaction screenshots', 'Sharing full account numbers', 'Paying for a UTR lookup', 'Trusting a reference not shown by a regulated payment provider'],
    faq: [['Is a game order ID the same as UTR?', 'No. The game order identifies its internal ledger; the UTR or RRN identifies the payment rail.'], ['Who can verify a UTR?', 'The relevant bank or regulated payment provider can trace its own transaction reference.'], ['What if the app gives only a screenshot?', 'Request the reference as text plus payout date, amount and issuing bank.']]
  },
  {
    slug: 'fake-gaming-customer-care-scam',
    title: 'Fake Gaming Customer Care Scam: OTP and Refund Warning',
    h1: 'Fake Gaming Customer Care — Red Flags and Immediate Action',
    description: 'Identify fake gaming-app support accounts, refund QR scams, remote-access requests and OTP theft attempts.',
    category: 'Safety', updated: '2026-07-10',
    quickAnswer: 'Real support should not ask for your OTP, UPI PIN, card PIN or remote control of your phone. End the interaction and secure financial accounts immediately if any were shared.',
    context: 'Fraudsters often appear in search comments, Telegram groups and video descriptions after users publicly mention deposit or withdrawal problems.',
    immediateSteps: ['Stop screen sharing and remote-access apps.', 'Change banking and email passwords from a clean device.', 'Contact the bank and block compromised instruments.', 'Save the fake profile, number, payment request and chat.', 'Call 1930 immediately after financial loss or unauthorised access.'],
    evidence: ['Profile URL/username', 'Phone number', 'Chat export', 'UPI ID or bank beneficiary', 'Remote-access app logs'],
    escalation: ['Bank fraud team', '1930 financial fraud helpline', 'cybercrime.gov.in', 'Report profile inside Telegram/WhatsApp/social platform', 'Local police when threats or continuing access exist'],
    avoid: ['Refund QR codes', 'Collect-money UPI requests', 'OTP sharing', 'APK or remote-control installation'],
    faq: [['Is a UPI PIN needed to receive money?', 'No. Entering a UPI PIN authorises an outgoing transaction.'], ['Can support safely use screen sharing?', 'Do not allow remote access to a phone containing banking apps, OTPs or private documents.'], ['What should I do after sharing an OTP?', 'Contact the bank immediately, block affected access and report through 1930.']]
  },
  {
    slug: 'gaming-apk-safety-check',
    title: 'Gaming APK Safety Check: Package, Permissions and Signature',
    h1: 'How to Check a Gaming APK Before Installation',
    description: 'Independent APK safety checklist covering source domain, package name, permissions, signing certificate and malware scan limitations.',
    category: 'Safety', updated: '2026-07-10',
    quickAnswer: 'Do not install an APK only because a page calls it official. Verify the developer identity, package name, signing certificate, permissions, privacy policy and source domain first.',
    context: 'APK files can request access to SMS, contacts, accessibility services, storage and screen overlays. A virus-scan badge on a download page is not enough evidence by itself.',
    immediateSteps: ['Prefer a recognised app store where available.', 'Confirm the legal developer and domain.', 'Compare package name and signing fingerprint across updates.', 'Review requested permissions before installation.', 'Scan the file, while remembering that no scanner guarantees safety.'],
    evidence: ['Download URL', 'SHA-256 file hash', 'Package name/version', 'Signing-certificate fingerprint', 'Permission list and privacy policy'],
    escalation: ['Remove suspicious device-admin or accessibility access.', 'Uninstall unknown APKs.', 'Run device security checks.', 'Change exposed passwords from another clean device.', 'Report unauthorised transactions through 1930.'],
    avoid: ['Enabling every requested permission', 'Installing “withdrawal fix” APKs', 'Updates signed by a different certificate', 'Apps with no verifiable developer or privacy contact'],
    faq: [['Does a malware scan prove an APK is safe?', 'No. It is one signal; identity, signing continuity, permissions and behaviour also matter.'], ['Why is the signing certificate important?', 'Updates from the same legitimate developer should normally maintain a consistent signing identity.'], ['Should a game need SMS or accessibility access?', 'Treat broad permissions as high risk unless the developer provides a clear, necessary explanation.']]
  },
  {
    slug: 'gaming-app-kyc-problem',
    title: 'Gaming App KYC Problem: Protect PAN, Aadhaar and Bank Data',
    h1: 'Gaming App KYC Failed or Pending — Privacy-First Checklist',
    description: 'Protect personal documents while handling gaming-app KYC failure, mismatch, pending verification and repeated upload requests.',
    category: 'Account', updated: '2026-07-10',
    quickAnswer: 'Upload identity documents only through a verified operator flow with a clear privacy policy. Never send PAN, Aadhaar, selfie or bank statement to an individual Telegram or WhatsApp account.',
    context: 'KYC documents can enable identity theft if sent to impersonators. Verify the legal entity, purpose, retention policy and secure upload channel before submission.',
    immediateSteps: ['Confirm the operator legal name and privacy policy.', 'Use only the in-app secure upload flow.', 'Mask unrelated statement transactions.', 'Record what was uploaded and when.', 'Ask for a reason if verification is rejected.'],
    evidence: ['KYC request screen', 'Legal entity/privacy policy', 'Upload acknowledgement', 'Rejection reason', 'Support ticket'],
    escalation: ['Operator data-protection/grievance contact', 'Revoke access where possible', 'Secure linked email and phone', 'Report identity misuse to cybercrime.gov.in', 'Contact banks if financial documents were exposed'],
    avoid: ['Sending documents in Telegram DMs', 'Sharing full Aadhaar where a masked copy is accepted', 'Uploading through unknown shortened links', 'Paying a KYC approval fee'],
    faq: [['Can support ask for KYC in chat?', 'Sensitive documents should be uploaded only through a verified secure process, not sent casually to an individual account.'], ['What should I mask?', 'Follow lawful verification requirements, but avoid exposing unrelated transactions or identifiers that are not needed.'], ['What if I sent documents to a fake account?', 'Secure related accounts, preserve evidence and report suspected identity misuse promptly.']]
  },
  {
    slug: 'report-online-game-fraud-india',
    title: 'Report Online Game Fraud in India: 1930 Complaint Guide',
    h1: 'How to Report Suspected Online Game Fraud in India',
    description: 'Prepare evidence and report suspected online gaming financial fraud through 1930, cybercrime.gov.in, your bank and relevant platforms.',
    category: 'Complaint', updated: '2026-07-10',
    quickAnswer: 'For immediate cyber financial fraud reporting, call 1930 and submit a complaint at cybercrime.gov.in. Contact your bank immediately and preserve complete transaction evidence.',
    context: 'Fast reporting can help payment providers and law enforcement identify beneficiary accounts. Do not delay while negotiating with an unknown recovery agent.',
    immediateSteps: ['Call 1930 as soon as financial fraud is suspected.', 'Contact the bank fraud team.', 'File a Report & Track complaint at cybercrime.gov.in.', 'Save the acknowledgement number.', 'Do not send further payments.'],
    evidence: ['Chronological summary', 'All UTRs and beneficiary details', 'App/domain/APK identity', 'Chat and support records', 'Screenshots and bank statements'],
    escalation: ['National Cybercrime Reporting Portal', 'Bank grievance and fraud team', 'UPI/payment-provider dispute', 'Local police where appropriate', 'Messaging platform abuse report'],
    avoid: ['Paying private recovery agents upfront', 'Deleting the app before saving evidence', 'Publicly posting unmasked documents', 'Threatening or contacting suspected beneficiary accounts directly'],
    faq: [['What is the cybercrime helpline number?', 'The Government of India financial cyber-fraud helpline is 1930.'], ['Where can I file online?', 'Use the National Cyber Crime Reporting Portal at cybercrime.gov.in.'], ['Can GameHelp India file for me?', 'No. We do not collect personal financial evidence or submit complaints on a user’s behalf.']]
  },
  {
    slug: 'online-game-refund-request-template',
    title: 'Online Game Refund Request Template: Neutral Complaint Draft',
    h1: 'Online Game Refund or Payment Complaint Template',
    description: 'Use a factual complaint structure for a missing deposit, unreceived withdrawal, unauthorised payment or account-access dispute.',
    category: 'Complaint', updated: '2026-07-10',
    quickAnswer: 'A strong complaint states the facts, amount, date, transaction reference, requested resolution and response deadline without threats or unsupported allegations.',
    context: 'Use the private on-device complaint-draft tool to organise facts. GameHelp India does not receive or store the information entered there.',
    immediateSteps: ['Collect every transaction and ticket reference.', 'Write a short chronological timeline.', 'State the exact resolution requested.', 'Attach masked evidence.', 'Send through a verified grievance channel.'],
    evidence: ['Transaction references', 'Order/withdrawal IDs', 'Support ticket', 'Relevant terms', 'Masked bank proof'],
    escalation: ['Operator grievance', 'Bank/payment dispute', '1930 for suspected fraud', 'Cybercrime portal', 'Local authorities or qualified legal advice where appropriate'],
    avoid: ['False claims', 'Publishing private evidence', 'Multiple contradictory complaints', 'Sending documents to unverified contacts'],
    faq: [['Does the template guarantee recovery?', 'No. It only helps organise a clear factual complaint.'], ['Is my data uploaded?', 'The tool is designed to generate text locally in your browser without sending the form to GameHelp India.'], ['Can I accuse an app of fraud?', 'State verifiable facts and use “suspected” where appropriate; avoid unsupported public accusations.']]
  }
];

export const categories = ['All', 'Deposit', 'Withdrawal', 'Account', 'Safety', 'Complaint'] as const;

export function getHelpPage(slug: string) {
  return helpPages.find((page) => page.slug === slug);
}
