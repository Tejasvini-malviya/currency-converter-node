# 💱 Currency Converter (Node.js)

A simple, interactive command-line currency converter built with Node.js that provides real-time exchange rates using the Frankfurter API.

![Node.js](https://img.shields.io/badge/node.js-18+-green.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## ✨ Features

- 🌍 **Real-time Exchange Rates** - Fetches live currency data from Frankfurter API
- 💬 **Interactive CLI** - User-friendly command-line interface
- ⚡ **Fast & Lightweight** - No external dependencies (uses native Node.js modules)
- 🔄 **Multiple Currencies** - Supports USD, EUR, INR, and many more
- 🎯 **Accurate Conversions** - Up-to-date exchange rates with 2 decimal precision

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/currency-converter-node.git
cd currency-converter-node
```

2. Run the application:
```bash
node index.js
```

## 📖 Usage

Run the application and follow the interactive prompts:

```bash
$ node index.js
Enter the amount: 100
Enter source currency (USD, INR, EUR): USD
Enter target currency (USD, INR, EUR): EUR
100 USD = 92.45 EUR
```

### Supported Currencies

The application supports all currencies available through the Frankfurter API, including but not limited to:
- USD (US Dollar)
- EUR (Euro)
- GBP (British Pound)
- INR (Indian Rupee)
- JPY (Japanese Yen)
- CAD (Canadian Dollar)
- AUD (Australian Dollar)
- And many more...

## 🛠️ How It Works

1. The application prompts you to enter an amount to convert
2. You specify the source currency (e.g., USD)
3. You specify the target currency (e.g., EUR)
4. The app fetches real-time exchange rates from [Frankfurter API](https://www.frankfurter.app/)
5. The converted amount is displayed instantly

## 📝 Code Example

```javascript
const readline = require("readline");

// Simple async function to convert currencies
async function convertCurrency(amount, from, to) {
    const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`;
    const data = await (await fetch(url)).json();
    return data.rates[to];
}
```

## 🤝 Contributing

Contributions are welcome! Feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Frankfurter API](https://www.frankfurter.app/) for providing free currency exchange rates
- Built with ❤️ using Node.js

## 📧 Contact

Project Link: [https://github.com/yourusername/currency-converter-node](https://github.com/yourusername/currency-converter-node)

---

⭐ If you find this project useful, please consider giving it a star!