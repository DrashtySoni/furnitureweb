import { HeadersFunction, json, LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import {
    HttpCacheHeaderTagger,
    HttpCacheHeaderTaggerFromLoader,
} from '~/core/Http-Cache-Tagger'
import { fetchFolder } from '~/core/UseCases'
import { CategoryList } from '~/core/components/category-list'
import { BlogItem } from '~/core/components/blog-item'

export const loader: LoaderFunction = async ({ params }) => {
    const path = `/stories`
    const folder = await fetchFolder(path)
    return json({ folder }, HttpCacheHeaderTagger('30s', '1w', [path]))
}

export const headers: HeadersFunction = ({ loaderHeaders }) => {
    return HttpCacheHeaderTaggerFromLoader(loaderHeaders).headers
}

export default function FolderPage() {
    const { folder } = useLoaderData()
    let title = folder.components.find(
        (component: any) => component.type === 'singleLine'
    )?.content?.text
    let description = folder.components.find(
        (component: any) => component.type === 'richText'
    )?.content?.plainText

    return (
        <div className="lg:w-content mx-auto w-full">
            <h1 className="text-3xl font-bold mt-10 mb-4">{title}</h1>
            <div className="flex gap-5">{description}</div>
            <div className="flex flex-wrap gap-10 mt-10">
                {folder.children.map((child: any) => (
                    <BlogItem item={child} key={child.name}/>
                ))}
            </div>
        </div>
    )
}
