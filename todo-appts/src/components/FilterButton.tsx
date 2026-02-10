
export type FilterType = 'all' | 'active' | 'completed';

interface FilterButtonsProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const FilterButton = ({ currentFilter, onFilterChange }: FilterButtonsProps) => {

  const filters: { label: string; value: FilterType }[] = [
    { label: 'Все', value: 'all' },
    { label: 'Активные', value: 'active' },
    { label: 'Завершённые', value: 'completed' },
  ];

  return (
    <div className="filter-section">
      <div className="task-stats">

      </div>
      <div className="filter-buttons">
        {filters.map(filter => (
          <button
            key={filter.value}
            className={`btn btn-filter ${currentFilter === filter.value ? 'active' : ''}`}
            onClick={() => onFilterChange(filter.value)}>
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterButton;