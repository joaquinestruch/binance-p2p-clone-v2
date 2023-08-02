import { useQuery } from "react-query";
import {AiFillLike} from "react-icons/ai"
import "./table.css"
import { useStore } from "../../store";
import { v4 as uuidv4 } from 'uuid';
import React, {useEffect } from "react";
import { SkeletonsTable } from "../Skeletons/Skeletons";

function OfferTable() {

    const {crypto, tradeType,filterAmount, filterUserType,fiat} = useStore(); 
    
    const priceFormatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });

  async function getAdv() {
    const res = await fetch(`https://criptoya.com/api/binancep2p/${tradeType}/${crypto}/${fiat}/20`)
    const data = await res.json();
    return data
  }

  const {data, status} = useQuery(["adv", crypto, tradeType, fiat], getAdv);


  if(status == "loading"){
    return (
      <table className="table-skeletons">
      <td>
        <SkeletonsTable/>
        <div className="divider"></div>
        <SkeletonsTable/>
        <div className="divider"></div>
        <SkeletonsTable/>
      </td>
    </table>
    )
  }

  if(status == "error"){
    return
  }


  return <table>
  <thead>
    <tr>
      <th>Anunciante</th>
      <th>
        Precio <span className="price-table-head">{tradeType == "buy" ? "De más bajo a más alto" : "De más alto a más bajo"}</span>
      </th>
      <th>Límite/Disponible</th>
      <th>Pago</th>
      <th>
        Operación <span className="zero-fees-alert">0 comisiones</span>
      </th>
    </tr>
    <tr>
      <th colSpan="5">
        <div className="divider"></div>
      </th>
    </tr>
  </thead>
  <tbody>
    {
    
    data.data.filter((e) => {
        
        if(filterUserType) return e.advertiser.userType === "merchant"
        if(!filterUserType) return e

    }).filter((e) => {

        function desformatearNumero(numeroFormateado) {
            const numeroSinFormato = numeroFormateado.replace(/[^0-9.-]+/g, "");
            const numero = parseFloat(numeroSinFormato);
            return numero;
          }

        return Number(filterAmount) >= desformatearNumero(e.adv.minSingleTransAmount) 
    }).map((offer) => {
      const { advertiser, adv } = offer;
      const {
        userNo,
        nickName,
        userType,
        monthOrderCount,
        monthFinishRate,
        positiveRate,
      } = advertiser;

      const {
        advNo,
        classify,
        tradeType,
        asset,
        fiatUnit,
        price,
        surplusAmount,
        minSingleTransAmount,
        maxSingleTransAmount,
        tradeMethods,
        fiatSymbol,
      } = adv;



      return (
        <React.Fragment key={advNo}>
          <tr>
            <td className="td-advciante">
              <div className="profile-picture-username">
                <span className="profile-picture">
                  {nickName[0].toUpperCase()}
                </span>
                <span className="username-seller">
                  {nickName}{" "}

                  {
                    userType === "user" ? "" : <img
                    src="https://i.ibb.co/hcv6QYK/authentication-icon.png"
                    className="authentication"
                    alt="authentication"
                  />
                  }


                </span>
              </div>

              <div className="summary-adv">
                <span>
                  {monthOrderCount} órdenes |{" "}
                  {(monthFinishRate * 100).toFixed(2)}% Completado
                </span>
              </div>
              <div className="like-adv">
                <AiFillLike />
                <span>{(positiveRate * 100).toFixed(2)}%</span>
              </div>
            </td>

            <td className="td-price">
              <div className="div-price-crypto">
                <span className="price-crypto">
                  {priceFormatter.format(price).replace("$", "")}{" "}
                  <span className="fiat-unit-crypto-price">{fiatUnit}</span>
                </span>
              </div>
            </td>

            <td className="td-limit">
              <span>
                <span style={{color:"#808080"}} className="no-desktop">Disponible </span> 
                {surplusAmount} {asset}
              </span>
              <div className="div-limit-price">
              <span style={{color:"#808080"}} className="no-desktop">Límite </span> 
                <span>
                  {fiatSymbol} {priceFormatter.format(minSingleTransAmount).replace("$", "")}
                </span>{" "}
                -{" "}
                <span>
                  {fiatSymbol} {priceFormatter.format(maxSingleTransAmount).replace("$", "")}
                </span>
              </div>
            </td>

            <td className="td-methods">
              {tradeMethods.map((method) => {
                const { tradeMethodName, tradeMethodBgColor } = method;

                return (
                  <div
                    key={uuidv4()}
                    className="methods-div"
                  >
                    <div
                      style={{
                        height: "10px",
                        width: "3px",
                        backgroundColor: tradeMethodBgColor,
                        marginRight: "5px",
                      }}
                    ></div>
                    <span>{tradeMethodName}</span>
                  </div>
                );
              })}
            </td>

            <td className="td-operation">
              <a target="_blank" href={`https://p2p.binance.com/es/advertiserDetail?advertiserNo=${userNo}`}>
              <button
                className="operation-select"
                style={{
                  backgroundColor: tradeType === "BUY" ? "#f6465d" : "#0ecb81", cursor:"pointer"
                }}
              >
                {tradeType === "BUY"
                  ? `Vender ${asset}`
                  : `Comprar ${asset}`}
              </button>
              </a>

            </td>
          </tr>

          
          <tr>
            <th colSpan="5">
              <div className="divider"></div>
            </th>
          </tr>
        </React.Fragment>
      );
    })}
  </tbody>
</table>;
}

export default OfferTable;
