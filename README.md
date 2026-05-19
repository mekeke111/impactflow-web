# ImpactFlow Web

Frontend application for the ImpactFlow Protocol.

## Overview

ImpactFlow is a transparent community funding and aid distribution platform powered by Stellar and Soroban smart contracts.

This repository contains the web platform for:
- Organizations
- Beneficiaries
- Community validators
- Donors

## Features

- Wallet authentication
- Funding campaign creation
- Beneficiary onboarding
- Milestone tracking
- DAO governance participation
- Transparency dashboard
- Real-time funding updates

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Stellar Wallet Kit
- Zustand
- React Query

## Getting Started

```bash
git clone https://github.com/impactflowlabs/impactflow-web.git

cd impactflow-web

npm install

npm run dev
```

## Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_STELLAR_NETWORK=
NEXT_PUBLIC_CONTRACT_ID=
```

## Project Structure

```bash
src/
 ├── app/
 ├── components/
 ├── features/
 ├── services/
 ├── hooks/
 ├── store/
 └── utils/
```

## Roadmap

- [ ] Wallet connection
- [ ] Campaign creation
- [ ] Beneficiary dashboard
- [ ] DAO governance UI
- [ ] Analytics dashboard
- [ ] Mobile optimization

## License

MIT

## Notifications (usage)

This repository includes a small reusable notification system under `src/notifications`.

Basic usage in a React app (wrap your app):

```tsx
import { NotificationProvider } from './src/notifications';

function App() {
	return (
		<NotificationProvider>
			<YourApp />
		</NotificationProvider>
	);
}
```

Trigger notifications from components using the `useNotifications` hook:

```tsx
import { useNotifications } from './src/notifications';

function SomeComponent() {
	const { success, error, info } = useNotifications();

	return (
		<div>
			<button onClick={() => success('Saved successfully')}>Save</button>
			<button onClick={() => error('Failed to save')}>Fail</button>
		</div>
	);
}
```

Files added:

- `src/notifications/NotificationContext.tsx`
- `src/notifications/Toast.tsx`
- `src/notifications/toast.css`
- `src/notifications/index.ts`

