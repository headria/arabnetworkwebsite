import React, { useState } from "react";
import {
  Tr,
  Td,
  Tbody,
  Table,
  Thead,
  Th,
  Button,
  Success,
  Danger,
} from "./TableStyled";
import { useTranslation } from "react-i18next";
import Image from "next/image";
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
                    <Th scope="col">{t("Code_Currency")}</Th>
                    <Th scope="col">{t("Price_Table")}</Th>
                    <Th scope="col">{t("Vulome_24")}</Th>
                    <Th scope="col">{t("Changes")}</Th>
                    <Th scope="col">{t("Changes_price")}</Th>
                    <Th scope="col">{t("Traid")}</Th>
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
                          <div className="text-sm font-medium text-gray-900 mr-4 dark:text-white">
                            بیتکوین
                          </div>
                        </div>
                      </div>
                    </Td>
                    <Td>
                      <div className="text-sm text-gray-900 dark:text-white">
                        1000,251,000
                      </div>
                    </Td>
                    <Td>1.18-%</Td>
                    <Td>
                      {" "}
                      <Danger>1.18-%</Danger>
                    </Td>
                    <Td>چارت</Td>
                    <Td>
                      <Button color="#23d10f" className="">
                        {t("Buy")}
                      </Button>
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
                          <div className="text-sm font-medium text-gray-900 mr-4 dark:text-white">
                            اتریوم
                          </div>
                        </div>
                      </div>
                    </Td>
                    <Td>
                      <div className="text-sm text-gray-900 dark:text-white">
                        1000,251,000
                      </div>
                    </Td>
                    <Td>1.18-%</Td>
                    <Td>
                      {" "}
                      <Success>1.18-%</Success>
                    </Td>
                    <Td>چارت</Td>
                    <Td>
                      <Button color="#23d10f" className="">
                        {t("Buy")}
                      </Button>
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
                          <div className="text-sm font-medium text-gray-900 mr-4 dark:text-white">
                            کاردانو
                          </div>
                        </div>
                      </div>
                    </Td>
                    <Td>
                      <div className="text-sm text-gray-900 dark:text-white">
                        1000,251,000
                      </div>
                    </Td>
                    <Td>1.18-%</Td>
                    <Td>
                      {" "}
                      <Success>1.18-%</Success>
                    </Td>
                    <Td>چارت</Td>
                    <Td>
                      <Button color="#23d10f" className="">
                        {t("Buy")}
                      </Button>
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
                            src="/assets/images/coin/Rectangle 72-min"
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 mr-4 dark:text-white">
                            استلار
                          </div>
                        </div>
                      </div>
                    </Td>
                    <Td>
                      <div className="text-sm text-gray-900 dark:text-white">
                        1000,251,000
                      </div>
                    </Td>
                    <Td>1.18-%</Td>
                    <Td>
                      {" "}
                      <Success>1.18-%</Success>
                    </Td>
                    <Td>چارت</Td>
                    <Td>
                      <Button color="#23d10f" className="">
                        {t("Buy")}
                      </Button>
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
                          <div className="text-sm font-medium text-gray-900 mr-4 dark:text-white">
                            ترون
                          </div>
                        </div>
                      </div>
                    </Td>
                    <Td>
                      <div className="text-sm text-gray-900 dark:text-white">
                        1000,251,000
                      </div>
                    </Td>
                    <Td>1.18-%</Td>
                    <Td>
                      {" "}
                      <Success>1.18-%</Success>
                    </Td>
                    <Td>چارت</Td>
                    <Td>
                      <Button color="#23d10f" className="">
                        {t("Buy")}
                      </Button>
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
