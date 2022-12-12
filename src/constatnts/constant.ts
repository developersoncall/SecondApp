const Constants = {
    TOKEN_KEY: 'token',
    USER: 'user',
    hashTokenKey: 'hashToken',
    returnUrlKey: 'returnUrl',
  };
  
  const Messages = {
    UnknownError: 'An unknown error has occured',
    SessionExpired: 'Your session has expired, please login again.',
    BankValidatingError:'Error in validating the bank account',

  };
  const ButtonTitles = {
    AddButtonText: 'Add',
    CancelButtonText:'Cancel',
    RetryButtonText:'Retry',
    AddBank: 'Add Bank Account'
  }
  const Links = {
    TermsAndConditions: 'https://joyeux.in/terms-and-conditions/',
    PrivacyAndPolicy:"https://joyeux.in/privacy-policy/",
    CancellationAndRefundPlicy:"https://joyeux.in/cancellation-and-refund-policy/"

  }

  const drawerItems = [
    {
      name: "My Details",
    },
    {
      name: "Family Details",
    },
    {
      name: "Kyc Details",
    },
    {
      name: "Bank Account",
    },
    {
      name: "Address",
    },
  ];

  const INVESTMENT_ITEMS = [
    {
      name: "Digital Gold/Silver",
      icon: "gold",
    },
    {
      name: "Send Money",
      icon: "gold",
    },
    {
      name: "Mutual Funds",
      icon: "funds",
    },
    {
      name: "Stocks",
      icon: "stocks",
    },
    {
      name: "Insurance",
      icon: "insurance",
    },
  ];

  const legalItems = [
    {
      name: "Terms & Conditions",
    },
    {
      name: "Privacy Policy",
    },
    {
      name: "Cancelation & Refund Policy",
    },
    {
      name: "Delete Account",
    },
  ];

  const sideBarItems = [
    {
      name: "Profile",
      image: "profile",
      hasItems: true,
    },
    {
      name: "Portfolio",
      image: "portfolio",
      hasItems: false,
    },
    {
      name: "Circles",
      image: "circle",
      hasItems: false,
    },
    {
      name: "Events",
      image: "events_icon",
      hasItems: false,
    },
    {
      name: "Sell/Redeem",
      image: "sell",
      hasItems: false,
    },
    {
      name: "Transactions History",
      image: "transactions",
      hasItems: false,
    },
    {
      name: "Notifications",
      image: "notifications",
      hasItems: false,
    },
    {
      name: "Help & Support",
      image: "support",
      hasItems: true,
    },
    {
      name: "Legal",
      image: "legal",
      hasItems: true,
    },
    {
      name: "About Joyeux",
      image: "about",
      hasItems: false,
    },
    {},
    {},
  ];

  const BACKGROUND_GREDIENT_COLOR = [
    "#759A4E",
    "#478554",
    "#267355",
    "#136453",
    "#05625A",
    "#024842",
    "#113B33",
    "#283129",
    "#452625",
  ]
  
  export {
    Constants,
    Messages,
    BACKGROUND_GREDIENT_COLOR,
    INVESTMENT_ITEMS,
    drawerItems,
    legalItems,
    sideBarItems,
    ButtonTitles,
    Links
  };