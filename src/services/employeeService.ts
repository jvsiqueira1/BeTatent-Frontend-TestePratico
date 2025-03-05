import axios from "axios";
import { Employee } from "@/types/employees";

const API_URL = "http://localhost:3000/employees";

export async function fetchEmployees(): Promise<Employee[]> {
  try {
    const response = await axios.get<Employee[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar funcionários:", error);
    throw new Error("Erro ao carregar os funcionários.");
  }
}
