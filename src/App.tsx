import EmployeesTable from "@/components/EmployessTable";
import Header from "@/components/Header";

function App() {
  return (
    <div className="min-h-screen bg-[#F0F0F0]">
      <Header />
      <main className="mt-6">
        <EmployeesTable />
      </main>
    </div>
  );
}

export default App;
