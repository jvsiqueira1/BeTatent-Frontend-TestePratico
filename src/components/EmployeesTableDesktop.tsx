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

export default function EmployeesTableDesktop({ employees }: Props) {
  return (
    <div className="w-full bg-white">
      <Table className="border hidden md:table">
        <TableHeader className="bg-blue-700 text-white">
          <TableRow className="pointer-events-none">
            <TableHead className="text-white font-semibold text-center w-[80px]">
              Foto
            </TableHead>
            <TableHead className="text-white font-semibold px-4 py-3">
              Nome
            </TableHead>
            <TableHead className="text-white font-semibold px-4 py-3">
              Cargo
            </TableHead>
            <TableHead className="text-white font-semibold px-4 py-3">
              Data de Admissão
            </TableHead>
            <TableHead className="text-white font-semibold px-4 py-3">
              Telefone
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee.id} className="border-b">
              <TableCell className="text-center">
                <img
                  src={employee.image}
                  alt={employee.name}
                  className="w-12 h-12 rounded-full border border-gray-300 object-cover"
                />
              </TableCell>
              <TableCell className="text-gray-800 font-medium">
                {employee.name}
              </TableCell>
              <TableCell className="text-gray-600">{employee.job}</TableCell>
              <TableCell className="text-gray-600">
                {formatDate(employee.admission_date)}
              </TableCell>
              <TableCell className="text-gray-600">
                {formatPhoneNumber(employee.phone)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
