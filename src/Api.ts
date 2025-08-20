
import axios from "axios";
import { IKart, StatusId } from "./MyMenu";
import message from "antd/es/message";

export const fetchKartlar = async () => {
	const res = await axios.get("http://localhost:3001/api/backlogcards");
	return res.data;
};

export const fetchTodo = async () => {
	const res = await axios.get("http://localhost:3001/api/todoCards");
	return res.data;
};

export const fetchInProcess = async () => {
	const res = await axios.get("http://localhost:3001/api/InprocessCards");
	return res.data;
};
export const fetchInreviev = async () => {
	const res = await axios.get("http://localhost:3001/api/InreviewCards");
	return res.data;
};
export const fetchDone = async () => {
	const res = await axios.get("http://localhost:3001/api/DoneCards");
	return res.data;
};
export const fetchProjeler = async () => {
	const res = await axios.get("http://localhost:3001/api/projects");
	return res.data;
};

export const veriGonder = async (formData: any) => {
	const postData = { ...formData, status: StatusId.Open };
	const res = await axios.post("http://localhost:3001/api/card", postData);

	// Gönderilen statüye göre güncelle
	if (postData.status === StatusId.Open) {
		fetchKartlar();
		
	} else if (postData.status === StatusId.Todo) {
		fetchTodo();
	} else if (postData.status === StatusId.InProcess) {
		fetchInProcess();
	} else if (postData.status === StatusId.InReview) {
		fetchInreviev();
	} else if (postData.status === StatusId.Done) {
		fetchDone();
	} else {
		fetchProjeler();
	}
	
	return res.data;
};
