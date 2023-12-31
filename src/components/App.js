import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
import appStyle from "../scss/app.scss";

//Layouts
import ErrorLayout from "./layout/ErrorLayout";
import PrivateLayout from "./layout/PrivateLayout";
import PublicLayout from "./layout/PublicLayout";

//View
import Transactions from "./pages/private/transactions/Transactions";
import SignIn from "./pages/public/signIn/SignIn";
import SignUP from "./pages/public/signUp/SignUp";
import Profile from "./pages/private/profile/Profile";
import OnBoarding from "./pages/public/onBoarding/OnBoarding";
import Deposit from "./pages/private/deposit/Deposit";
import ErrorPage from "./pages/errors/ErrorPage";
import Npay from "./pages/public/npay/Npay";
import DashBoard from "./pages/private/dashboard/Dashboard";
import TransactionItem from "./pages/private/transactions/TransactionItem";
import SendForm from "./pages/private/transactions/SendForm";
import UpAccount from "./pages/private/upAccount/UpAccount";
import Notification from "./pages/private/notification/Notification";
import QrCode from "./pages/private/QrCode/QRCodePage";
import OrderFood from "./pages/private/orderFood/OrderFood";
import FoodItem from "./pages/private/orderFood/FoodItem";
import RequestMoney from "./pages/private/requestMoney/RequestMoney";

function App() {
  const publicPages = [
    {
      element: <SignIn />,
      path: '/signin'
    },
    {
      element: <SignUP />,
      path: '/signup'
    },
    {
      element: <OnBoarding />,
      path: '/'
    },
    {
      element: <Npay />,
      path: '/npay'
    },
  ];

  const PrivatePages = [
		{
			element: <DashBoard />,
			path: '/dashboard',
		},
		{
			element: <Profile />,
			path: '/profile',
		},
		{
			element: <Transactions />,
			path: '/transaction',
		},
		{
			element: <TransactionItem />,
			path: '/transactions/transactionId',
		},
		{
			element: <SendForm />,
			path: '/transactions/sendform',
		},
		{
			element: <UpAccount />,
			path: '/transactions/upaccount',
		},
		{
			element: <RequestMoney />,
			path: '/request',
		},
		{
			element: <QrCode />,
			path: '/qrcode',
		},

		{
			element: <Deposit />,
			path: '/deposit',
		},
		{
			element: <OrderFood />,
			path: '/fastfood',
		},
		{
			element: <FoodItem />,
			path: '/fastfood/:type/:id',
		},
		{
			element: <Notification />,
			path: '/notification',
		},
	]

  return (
		<Router>
			<Routes>
				<Route element={<PrivateLayout />}>
					{PrivatePages.map(page => (
						<Route key={page.path} path={page.path} element={page.element} />
					))}
				</Route>
				<Route element={<PublicLayout />}>
					{publicPages.map(page => (
						<Route key={page.path} path={page.path} element={page.element} />
					))}
				</Route>
				<Route element={<ErrorLayout />}>
					<Route path='*' element={<ErrorPage />} />
				</Route>
			</Routes>
		</Router>
	)
}

export default App;
