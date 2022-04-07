import React from "react";
import { useGetExchangesQuery } from "../services/cryptoExchagesApi";
import { Col, Row, Typography, Avatar } from "antd";
import millify from "millify";
import Loader from "./Loader";

const { Text } = Typography;

const Exchanges = () => {
  const { data: exchangesList, isFetching } = useGetExchangesQuery();

  if (isFetching) return <Loader />;
  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Start Year</Col>
        <Col span={6}>Country</Col>
      </Row>
      <Row>
        {exchangesList?.map((exchange) => (
          <Col span={24}>
            <Row key={exchange.id}>
              <Col span={6}>
                <Text>
                  <strong>{exchange.trust_score_rank}.</strong>
                </Text>
                <Avatar src={exchange.image} className="exchange-image" />
                <Text>
                  <strong>{exchange.name}.</strong>
                </Text>
              </Col>
              <Col span={6}>{millify(exchange.trade_volume_24h_btc)}</Col>
              <Col span={6}>{exchange.year_established}</Col>
              <Col span={6}>{exchange.country}</Col>
            </Row>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
