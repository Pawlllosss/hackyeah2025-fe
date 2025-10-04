interface ExperienceTileProps {
    jobTitle: string;
    companyName: string;
    jobStart: Date;
    jobEnd?: Date;
}

const ExperienceTile = ({jobTitle, companyName, jobStart, jobEnd}: ExperienceTileProps) => {
    const startHumanReadable = jobStart.toLocaleString('en-GB', {
        month: '2-digit',
        year: 'numeric'
    });
    const endHumanReadable = jobEnd?.toLocaleString('en-GB',
        {month: '2-digit', year: 'numeric'}
    ) ?? "now";
    return <div className="w-full rounded-2xl shadow-md p-4 bg-white">
        <p className="font-bold">{companyName}</p>
        <p>{jobTitle}</p>
        <p>{startHumanReadable} - {endHumanReadable}</p>
    </div>
}

export default ExperienceTile;