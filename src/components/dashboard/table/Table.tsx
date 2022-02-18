import React from "react";
import {
  Tr,
  Td,
  Tbody,
  Table,
  Thead,
  Th,
  Active,
  ChartImg,
} from "./TableStyled";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import {
  BsArrowUp,
  BsArrowDown,
  BsChevronDown,
  BsChevronUp,
} from "react-icons/bs";
const TableCoin: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col ">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden  sm:rounded-lg ">
              <Table>
                <Thead>
                  <Tr className="">
                    <Th className="text-left" scope="col">
                      {t("Code_Currency")}
                    </Th>
                    <Th className="text-left" scope="col">
                      {t("Price_Table")}
                    </Th>
                    <Th className="text-left" scope="col">
                      {t("Vulome_24")}
                    </Th>
                    <Th className="text-left" scope="col">
                      {t("Changes")}
                    </Th>
                    <Th className="text-left" scope="col">
                      {t("Changes_price")}
                    </Th>
                    <Th className="text-left" scope="col-3">
                      {t("Statistice")}
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <Image
                            className={"object-contain rounded-full"}
                            width={"100%"}
                            height={"100%"}
                            src="/assets/images/coin/Group 59-min.png"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-200 mr-4 dark:text-white inline-flex gap-2 cursor-pointer">
                            <span>Bitcoin</span>
                            <BsChevronDown className="text-white text-xs mt-1 font-semibold" />
                          </div>
                          <span className="text-gray-700 text-opacity-80 mt-2 block">
                            Link
                          </span>
                        </div>
                      </div>
                    </Td>
                    <Td>
                      <div className="text-sm text-white dark:text-white">
                        $ 26.35
                      </div>
                      <div className="text-green-600 inline-flex gap-1 text-xs mt-2">
                        <BsArrowDown className="" />
                        <span>$1.67</span>
                      </div>
                    </Td>
                    <Td>
                      <Active>
                        <p className="text-red-600">-2.18%</p>
                        <p className="text-gray-600 mt-2 ml-3">1h</p>
                      </Active>
                    </Td>
                    <Td>
                      <Active>
                        <p className="text-green-600">7.18%</p>
                        <p className="text-gray-600 mt-2 ml-3">1h</p>
                      </Active>
                    </Td>
                    <Td>
                      <Active>
                        <p className="text-green-600">10.18%</p>
                        <p className="text-gray-600 mt-2 ml-3">1h</p>
                      </Active>
                    </Td>
                    <Td>
                      <ChartImg isUp={false}>
                        <img
                          src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2011.svg"
                          alt="tezos-7d-price-graph"
                          loading="lazy"
                        />
                      </ChartImg>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <Image
                            className={"object-contain rounded-full"}
                            width={"100%"}
                            height={"100%"}
                            src="/assets/images/coin/Group 59-min.png"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-200 mr-4 dark:text-white inline-flex gap-2 cursor-pointer">
                            <span>Bitcoin</span>
                            <BsChevronDown className="text-white text-xs mt-1 font-semibold" />
                          </div>
                          <span className="text-gray-700 text-opacity-80 mt-2 block">
                            Link
                          </span>
                        </div>
                      </div>
                    </Td>
                    <Td>
                      <div className="text-sm text-white dark:text-white">
                        $ 26.35
                      </div>
                      <div className="text-green-600 inline-flex gap-1 text-xs mt-2">
                        <BsArrowDown className="" />
                        <span>$1.67</span>
                      </div>
                    </Td>
                    <Td>
                      <Active>
                        <p className="text-red-600">-2.18%</p>
                        <p className="text-gray-600 mt-2 ml-3">1h</p>
                      </Active>
                    </Td>
                    <Td>
                      <Active>
                        <p className="text-green-600">7.18%</p>
                        <p className="text-gray-600 mt-2 ml-3">1h</p>
                      </Active>
                    </Td>
                    <Td>
                      <Active>
                        <p className="text-green-600">10.18%</p>
                        <p className="text-gray-600 mt-2 ml-3">1h</p>
                      </Active>
                    </Td>

                    <Td>
                      <ChartImg isUp={false}>
                        <img
                          src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2011.svg"
                          alt="tezos-7d-price-graph"
                          loading="lazy"
                        />
                      </ChartImg>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <Image
                            className={"object-contain rounded-full"}
                            width={"100%"}
                            height={"100%"}
                            src="/assets/images/coin/Group 59-min.png"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-200 mr-4 dark:text-white cursor-pointer inline-flex gap-2">
                            <span>Bitcoin</span>
                            <BsChevronDown className="text-white text-xs mt-1 font-semibold" />
                          </div>
                          <span className="text-gray-700 text-opacity-80 mt-2 block">
                            Link
                          </span>
                        </div>
                      </div>
                    </Td>
                    <Td>
                      <div className="text-sm text-white dark:text-white">
                        $ 26.35
                      </div>
                      <div className="text-green-600 inline-flex gap-1 text-xs mt-2">
                        <BsArrowDown className="" />
                        <span>$1.67</span>
                      </div>
                    </Td>
                    <Td>
                      <Active>
                        <p className="text-red-600">-2.18%</p>
                        <p className="text-gray-600 mt-2 ml-3">1h</p>
                      </Active>
                    </Td>
                    <Td>
                      <Active>
                        <p className="text-green-600">7.18%</p>
                        <p className="text-gray-600 mt-2 ml-3">1h</p>
                      </Active>
                    </Td>
                    <Td>
                      <Active>
                        <p className="text-green-600">10.18%</p>
                        <p className="text-gray-600 mt-2 ml-3">1h</p>
                      </Active>
                    </Td>
                    <Td>
                      <ChartImg isUp={true}>
                        <img
                          src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4256.svg"
                          alt="tezos-7d-price-graph"
                          loading="lazy"
                        />
                      </ChartImg>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <Image
                            className={"object-contain rounded-full"}
                            width={"100%"}
                            height={"100%"}
                            src="/assets/images/coin/g57-min.png"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-200 mr-4 dark:text-white inline-flex gap-2 cursor-pointer">
                            <span>Ethreium</span>
                            <BsChevronDown className="text-white text-xs mt-1 font-semibold" />
                          </div>
                          <span className="text-gray-700 text-opacity-80 mt-2 block">
                            Link
                          </span>
                        </div>
                      </div>
                    </Td>
                    <Td>
                      <div className="text-sm text-white dark:text-white">
                        $ 38.35
                      </div>
                      <div className="text-green-600 inline-flex gap-1 text-xs mt-2">
                        <BsArrowUp />
                        <span>$1.67</span>
                      </div>
                    </Td>
                    <Td>
                      <Active>
                        <p className="text-red-600">-2.18%</p>
                        <p className="text-gray-600 mt-2 ml-3">1h</p>
                      </Active>
                    </Td>
                    <Td>
                      <Active>
                        <p className="text-green-600">9.18%</p>
                        <p className="text-gray-600 mt-2 ml-3">1h</p>
                      </Active>
                    </Td>
                    <Td>
                      <Active>
                        <p className="text-red-600">-7.18%</p>
                        <p className="text-gray-600 mt-2 ml-3">1h</p>
                      </Active>
                    </Td>
                    <Td>
                      <ChartImg isUp={false}>
                        <img
                          src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2011.svg"
                          alt="tezos-7d-price-graph"
                          loading="lazy"
                        />
                      </ChartImg>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <Image
                            className={"object-contain rounded-full"}
                            width={"100%"}
                            height={"100%"}
                            src="/assets/images/coin/Rectangle 70-min.png"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-200 mr-4 dark:text-white inline-flex gap-2 cursor-pointer">
                            <span>Cardano</span>
                            <BsChevronDown className="text-white text-xs mt-1 font-semibold" />
                          </div>
                          <span className="text-gray-700 text-opacity-80 mt-2 block">
                            Link
                          </span>
                        </div>
                      </div>
                    </Td>
                    <Td>
                      <div className="text-sm text-white dark:text-white">
                        $ 58.35
                      </div>
                      <div className="text-green-600 inline-flex gap-1 text-xs mt-2">
                        <BsArrowUp />
                        <span>$1.67</span>
                      </div>
                    </Td>
                    <Td>
                      <Active>
                        <p className="text-green-600">6.18%</p>
                        <p className="text-gray-600 mt-2 ml-3">1h</p>
                      </Active>
                    </Td>
                    <Td>
                      <Active>
                        <p className="text-green-600">5.18%</p>
                        <p className="text-gray-600 mt-2 ml-3">1h</p>
                      </Active>
                    </Td>
                    <Td>
                      <Active>
                        <p className="text-red-600">-1.18%</p>
                        <p className="text-gray-600 mt-2 ml-3">1h</p>
                      </Active>
                    </Td>
                    <Td>
                      <ChartImg isUp={false}>
                        <img
                          src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2011.svg"
                          alt="tezos-7d-price-graph"
                          loading="lazy"
                        />
                      </ChartImg>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <Image
                            className={"object-contain rounded-full"}
                            width={"100%"}
                            height={"100%"}
                            src="/assets/images/coin/Rectangle 70-min.png"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-200 mr-4 dark:text-white inline-flex gap-2 cursor-pointer">
                            <span>Cardano</span>
                            <BsChevronDown className="text-white text-xs mt-1 font-semibold" />
                          </div>
                          <span className="text-gray-700 text-opacity-80 mt-2 block">
                            Link
                          </span>
                        </div>
                      </div>
                    </Td>
                    <Td>
                      <div className="text-sm text-white dark:text-white">
                        $ 58.35
                      </div>
                      <div className="text-green-600 inline-flex gap-1 text-xs mt-2">
                        <BsArrowUp />
                        <span>$1.67</span>
                      </div>
                    </Td>
                    <Td>
                      <Active>
                        <p className="text-green-600">6.18%</p>
                        <p className="text-gray-600 mt-2 ml-3">1h</p>
                      </Active>
                    </Td>
                    <Td>
                      <Active>
                        <p className="text-green-600">5.18%</p>
                        <p className="text-gray-600 mt-2 ml-3">1h</p>
                      </Active>
                    </Td>
                    <Td>
                      <Active>
                        <p className="text-red-600">-1.18%</p>
                        <p className="text-gray-600 mt-2 ml-3">1h</p>
                      </Active>
                    </Td>
                    <Td>
                      <ChartImg isUp={false}>
                        <img
                          src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2011.svg"
                          alt="tezos-7d-price-graph"
                          loading="lazy"
                        />
                      </ChartImg>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <Image
                            className={"object-contain rounded-full"}
                            width={"100%"}
                            height={"100%"}
                            src="/assets/images/coin/g57-min.png"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-200 mr-4 dark:text-white inline-flex gap-2 cursor-pointer">
                            <span>Estelar</span>
                            <BsChevronDown className="text-white text-xs mt-1 font-semibold" />
                          </div>
                          <span className="text-gray-700 text-opacity-80 mt-2 block">
                            Link
                          </span>
                        </div>
                      </div>
                    </Td>
                    <Td>
                      <div className="text-sm text-white dark:text-white">
                        $ 80.35
                      </div>
                      <div className="text-red-600 inline-flex gap-1 text-xs mt-2">
                        <BsArrowDown className="" />
                        <span>$1.67</span>
                      </div>
                    </Td>
                    <Td>
                      <Active>
                        <p className="text-red-600">-1.18%</p>
                        <p className="text-gray-600 mt-2 ml-3">1h</p>
                      </Active>
                    </Td>
                    <Td>
                      <Active>
                        <p className="text-green-600">3.18%</p>
                        <p className="text-gray-600 mt-2 ml-3">1h</p>
                      </Active>
                    </Td>
                    <Td>
                      <Active>
                        <p className="text-green-600">1.18%</p>
                        <p className="text-gray-600 mt-2 ml-3">1h</p>
                      </Active>
                    </Td>
                    <Td>
                      <ChartImg isUp={true}>
                        <img
                          src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4256.svg"
                          alt="tezos-7d-price-graph"
                          loading="lazy"
                        />
                      </ChartImg>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <Image
                            className={"object-contain rounded-full"}
                            width={"100%"}
                            height={"100%"}
                            src="/assets/images/coin/Group 59-min.png"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-200 mr-4 dark:text-white inline-flex gap-2 cursor-pointer">
                            <span>Tron</span>
                            <BsChevronDown className="text-white text-xs mt-1 font-semibold" />
                          </div>
                          <span className="text-gray-700 text-opacity-80 mt-2 block">
                            Link
                          </span>
                        </div>
                      </div>
                    </Td>
                    <Td>
                      <div className="text-sm text-white dark:text-white">
                        $ 78.35
                      </div>
                      <div className="text-red-600 inline-flex gap-1 text-xs mt-2">
                        <BsArrowDown className="" />
                        <span>$1.67</span>
                      </div>
                    </Td>
                    <Td>
                      <Active>
                        <p className="text-red-600">-1.18%</p>
                        <p className="text-gray-600 mt-2 ml-3">1h</p>
                      </Active>
                    </Td>
                    <Td>
                      <Active>
                        <p className="text-red-600">-1.18%</p>
                        <p className="text-gray-600 mt-2 ml-3">1h</p>
                      </Active>
                    </Td>
                    <Td>
                      <Active>
                        <p className="text-green-600">4.18%</p>
                        <p className="text-gray-600 mt-2 ml-3">1h</p>
                      </Active>
                    </Td>
                    <Td>
                      <ChartImg isUp={true}>
                        <img
                          src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4256.svg"
                          alt="klaytn-7d-price-graph"
                          loading="lazy"
                        />
                      </ChartImg>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <Image
                            className={"object-contain rounded-full"}
                            width={"100%"}
                            height={"100%"}
                            src="/assets/images/coin/Group 59-min.png"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-200 mr-4 dark:text-white inline-flex gap-2 cursor-pointer">
                            <span>Tron</span>
                            <BsChevronDown className="text-white text-xs mt-1 font-semibold" />
                          </div>
                          <span className="text-gray-700 text-opacity-80 mt-2 block">
                            Link
                          </span>
                        </div>
                      </div>
                    </Td>
                    <Td>
                      <div className="text-sm text-white dark:text-white">
                        $ 78.35
                      </div>
                      <div className="text-red-600 inline-flex gap-1 text-xs mt-2">
                        <BsArrowDown className="" />
                        <span>$1.67</span>
                      </div>
                    </Td>
                    <Td>
                      <Active>
                        <p className="text-red-600">-1.18%</p>
                        <p className="text-gray-600 mt-2 ml-3">1h</p>
                      </Active>
                    </Td>
                    <Td>
                      <Active>
                        <p className="text-red-600">-1.18%</p>
                        <p className="text-gray-600 mt-2 ml-3">1h</p>
                      </Active>
                    </Td>
                    <Td>
                      <Active>
                        <p className="text-green-600">4.18%</p>
                        <p className="text-gray-600 mt-2 ml-3">1h</p>
                      </Active>
                    </Td>
                    <Td>
                      <ChartImg isUp={true}>
                        <img
                          src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4256.svg"
                          alt="klaytn-7d-price-graph"
                          loading="lazy"
                        />
                      </ChartImg>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TableCoin;
