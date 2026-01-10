import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import './calendar.css';
import { useEffect, useState } from 'react';

export default function CalendarView() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const apiKey = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;
    const calendarId = import.meta.env.VITE_GOOGLE_CALENDAR_ID;
    const whatsappNumber = "5492983693168";

    return (
        <div className='max-w-5xl mx-auto py-8 px-2 md:px-4'>

            <div className="text-center mb-8 space-y-2">
                <h2 className="text-3xl font-bold text-gray-800">Disponibilidad Horaria</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Los bloques <span className="text-red-400 font-bold bg-red-50 px-2 py-0.5 rounded">rojos</span> indican horarios ocupados.
                    <br />
                    Los espacios en <strong>blanco</strong> están libres. ¡Elige el tuyo!
                </p>
            </div>

            <div className='calendar-wrapper bg-white p-2 md:p-6 rounded-xl shadow-lg border border-gray-100'>
                <FullCalendar
                    plugins={[timeGridPlugin, googleCalendarPlugin]}
                    initialView={isMobile ? 'timeGridDay' : 'timeGridWeek'}
                    googleCalendarApiKey={apiKey}
                    events={{ googleCalendarId: calendarId }}

                    // --- Celu ---
                    views={{
                        timeGridDay: {
                            dayHeaders: false,
                            titleFormat: { weekday: 'long', day: 'numeric', month: 'short' }
                        },
                        timeGridWeek: {
                            dayHeaders: true,
                            titleFormat: { month: 'long', year: 'numeric' }
                        }
                    }}

                    slotMinTime="08:00:00"
                    slotMaxTime="21:00:00"
                    slotDuration="01:00:00"
                    allDaySlot={false}
                    locale="es"
                    contentHeight="auto"
                    expandRows={true}
                    editable={false}
                    selectable={false}
                    eventDisplay="block"

                    headerToolbar={{
                        left: 'prev',
                        center: 'title',
                        right: 'next'
                    }}

                    eventClick={(info) => info.jsEvent.preventDefault()}

                    eventContent={() => (
                        <div className="flex items-center justify-center h-full w-full">
                            <span className="text-xs font-semibold tracking-wide opacity-80">
                                Ocupado
                            </span>
                        </div>
                    )}

                    eventColor="#fee2e2"
                    eventTextColor="#991b1b"
                    eventBorderColor="transparent"
                    hiddenDays={[0]}

                    slotLabelFormat={{
                        hour: 'numeric',
                        minute: '2-digit',
                        meridiem: 'short',
                        hour12: true
                    }}
                />
            </div>

            <div className="mt-8 text-center px-4">
                <a
                    href={`https://wa.me/${whatsappNumber}?text=Hola!%20Vi%20tu%20calendario%20y%20quisiera%20reservar%20un%20turno.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full md:w-auto inline-flex justify-center items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-transform hover:scale-105 active:scale-95"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                    </svg>
                    Reservar por WhatsApp
                </a>
            </div>
        </div>
    );
}