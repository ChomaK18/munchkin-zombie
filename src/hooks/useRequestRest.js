import axios from "axios";
import { useEffect, useState } from "react";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

const restUrl = "api/monsters";

const useRequestRest = () => {
  const [data, setData] = useState([]);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    async function delayFunc() {
      try {
        const result = await axios.get(restUrl);
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setData(result.data);
      } catch (e) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(e);
      }
    }
    delayFunc();
  }, []);

  //DONE CALLBACK
  function updateRecord(record) {
    const originalRecords = [...data];
    const newRecords = data.map(function (rec) {
      return rec.id === record.id ? record : rec;
    });
    async function delayFunction() {
      try {
        setData(newRecords);
        await axios.put(`${restUrl}/${record.id}`, record);
      } catch (e) {
        console.log("error thrown inside delayFunction", e);
        setData(originalRecords);
      }
    }
    delayFunction();
  }

  //DONE CALLBACK
  function deleteRecord(record) {
    const originalRecords = [...data];
    const newRecords = data.filter(function (rec) {
      return rec.id != record.id;
    });
    async function delayFunction() {
      try {
        setData(newRecords);
        await axios.delete(`${restUrl}/${record.id}`, record);
      } catch (e) {
        console.log("error thrown inside delayFunction", e);
        setData(originalRecords);
      }
    }
    delayFunction();
  }

  //DONE CALLBACK
  function insertRecord(record) {
    const originalRecords = [...data];
    const newRecords = [record, ...data];
    async function delayFunction() {
      try {
        setData(newRecords);
        await axios.post(`${restUrl}/99999`, record);
      } catch (e) {
        console.log("error thrown inside delayFunction", e);
        setData(originalRecords);
      }
    }
    delayFunction();
  }

  return {
    data,
    requestStatus,
    error,
    updateRecord,
    insertRecord,
    deleteRecord,
  };
};

export default useRequestRest;
