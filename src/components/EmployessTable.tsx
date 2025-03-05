import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Employee } from "@/types/employees";
import { fetchEmployees } from "@/services/employeeService";
import EmployeesTableDesktop from "./EmployeesTableDesktop";
import EmployeesTableMobile from "./EmployeesTableMobile";

export default function EmployeesTable() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const data = await fetchEmployees();
        setEmployees(data);
        setFilteredEmployees(data);
      } catch (err) {
        console.error(`${err}`);
      }
    };

    loadEmployees();
  }, []);

  // Filtra os funcionários conforme a busca
  useEffect(() => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    const filtered = employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(lowerSearchTerm) ||
        employee.job.toLowerCase().includes(lowerSearchTerm) ||
        employee.phone.includes(lowerSearchTerm),
    );
    setFilteredEmployees(filtered);
  }, [searchTerm, employees]);

  return (
    <div className="w-full max-w-screen-lg mx-auto md:px-0 font-[--font-roboto]">
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h1>Funcionários</h1>
        <div className="relative w-full md:w-64">
          <Input
            type="text"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 pl-4 bg-white text-black"
          />
          <img
            src="/search.svg"
            alt="Buscar"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 filter brightness-50"
          />
        </div>
      </div>
      <EmployeesTableDesktop employees={filteredEmployees} />
      <EmployeesTableMobile employees={filteredEmployees} />
    </div>
  );
}
