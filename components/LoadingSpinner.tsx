// Spec: LoadingSpinner — props: message (opcional).
// Indicador de carga mientras la "API" simulada responde.
interface LoadingSpinnerProps {
  message?: string;
}

const LoadingSpinner = ({ message = "Cargando alojamientos…" }: LoadingSpinnerProps) => {
  return (
    <div role="status" className="flex flex-col items-center gap-3 py-20 text-gray-600">
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-rose-500" />
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
