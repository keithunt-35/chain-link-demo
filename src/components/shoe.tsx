import { ConnectWallet, WalletDefault } from "@coinbase/onchainkit/wallet";
import "./Shoe.css";
import { Transaction, TransactionDefault } from "@coinbase/onchainkit/transaction";

export default function Shoe() {
  return (
    <div className="card">
      <img src="https://via.placeholder.com/300" alt="shoe" className="shoe-image" />
      <h2 className="shoe-title">Nike Air Force 1</h2>
      <p className="shoe-description">Classic low-top sneaker with an iconic design</p>
      <p className="shoe-price">Price: $3.00</p>
     <WalletDefault />
      
    </div>
  );
}