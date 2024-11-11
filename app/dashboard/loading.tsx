import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="flex flex-col space-y-3 px-5 pt-5">
            <Skeleton className="h-8 rounded-xl w-full" />
            <hr />
            <div className="space-y-2">
                <Skeleton className="h-8 w-full" />
            </div>
            <Skeleton className="h-8 rounded-xl w-[200px] mx-auto" />
        </div>
    )
}
