import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Employee } from "@/types/employees";
import { formatPhoneNumber, formatDate } from "@/utils/format";

interface Props {
  employees: Employee[];
}

export default function EmployeesTableMobile({ employees }: Props) {
  const [expandedRows, setExpandedRows] = useState<{ [key: number]: boolean }>(
    {},
  );

  const toggleRow = (id: number) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="md:hidden w-full overflow-x-auto pb-16">
      <Table className="w-full border border-gray-300 rounded-lg">
        <TableHeader className="bg-blue-700">
          <TableRow className="pointer-events-none">
            <TableHead className="text-white font-semibold text-left w-1/3">
              Foto
            </TableHead>
            <TableHead className="text-white font-semibold text-left w-1/3">
              Nome
            </TableHead>
            <TableHead className="text-right w-1/3">
              <img
                src="/src/assets/point.svg"
                alt="icone"
                className="w-2 h-2 inline-block"
              />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee, index) => (
            <>
              <TableRow key={employee.id} className="border-b bg-white">
                <TableCell className="text-center p-2">
                  <img
                    src={employee.image}
                    alt={employee.name}
                    className="w-10 h-10 rounded-full border border-gray-300 object-cover"
                  />
                </TableCell>
                <TableCell className="text-gray-800 font-medium">
                  {employee.name}
                </TableCell>
                <TableCell className="text-right">
                  <button
                    onClick={() => toggleRow(employee.id)}
                    className="focus:outline-none"
                  >
                    <img
                      src={
                        expandedRows[employee.id]
                          ? "/src/assets/arrow-up.svg"
                          : "/src/assets/arrow-down.svg"
                      }
                      alt="Expandir"
                      className="w-5 h-5 filter invert"
                    />
                  </button>
                </TableCell>
              </TableRow>
              {expandedRows[employee.id] && (
                <TableRow className="bg-white">
                  <TableCell colSpan={3} className="p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Cargo:</strong> {employee.job}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Data de Admissão:</strong>{" "}
                      {formatDate(employee.admission_date)}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Telefone:</strong>{" "}
                      {formatPhoneNumber(employee.phone)}
                    </p>
                  </TableCell>
                </TableRow>
              )}
              {index === employees.length - 1 && (
                <TableRow className="md:hidden">
                  <TableCell colSpan={3} className="h-16"></TableCell>
                </TableRow>
              )}
            </>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
